# -*- coding: utf-8 -*-
from flask import json

from api.models import Type, Subtype, Style, SubtypeImage, StyleImage
from rest_framework import viewsets
from api.serializers import TypeSerializer, SubtypeSerializer, StyleSerializer, SubtypeImageSerializer, StyleImageSerializer
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
import base64
from django.core.files.base import ContentFile
import uuid
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token


class TypeViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all()
    renderer_classes = (JSONRenderer,)

    # Get all Types with photo from there subtypes photos
    def get_types(self, request):
        try:
            serializer_context = {
                'request': Request(request),
            }
            serializer = TypeSerializer(Type.objects.all(), many=True, context=serializer_context)
            for type in serializer.data:
                type['images'] = list(SubtypeImage.objects.filter(subtype__in=Subtype.objects.filter(type_id=type["id"])).values_list('image', flat=True))
            return Response({'types': serializer.data})

        except ObjectDoesNotExist:
            return Response({"types": []}, status=status.HTTP_400_BAD_REQUEST)

    # Create new Type
    def create_new_type(self, request):
        # Get params from request
        request_data = json.loads(request.body)
        try:
            serializer_context = {
                'request': Request(request),
            }
            type = Type.objects.create(name=request_data.get('name'), description=request_data.get('description'))

            serializer = TypeSerializer([type], many=True, context=serializer_context)

            # Return new Type
            return Response({'type': serializer.data[0]})

        except ObjectDoesNotExist:
            return Response({"type": {}}, status=status.HTTP_400_BAD_REQUEST)


class SubtypeViewSet(viewsets.ModelViewSet):
    queryset = Subtype.objects.all()
    serializer_class = SubtypeSerializer
    renderer_classes = (JSONRenderer,)

    # Get Subtypes list by Type token
    def get_subtypes_by_type_id(self, request, type_id):
        try:
            serializer_context = {
                'request': Request(request),
            }
            serializer = SubtypeSerializer(Subtype.objects.filter(type_id=type_id), many=True, context=serializer_context)
            for subtype in serializer.data:
                subtype['images'] = list(SubtypeImage.objects.filter(subtype_id=subtype['id']).values_list('image', flat=True))

            return Response({'subtypes': serializer.data})

        except ObjectDoesNotExist:
            return Response({"subtypes": []}, status=status.HTTP_400_BAD_REQUEST)

    # Get Subtypes list by Type token
    def get_subtypes_by_ids_list(self, request):
        # Get params from request
        request_data = json.loads(request.body)
        ids_list = request_data.get('ids_list')

        try:
            serializer_context = {
                'request': Request(request),
            }
            subtypes = Subtype.objects.filter(id__in=ids_list)

            serializer = SubtypeSerializer(subtypes, many=True, context=serializer_context)
            for subtype in serializer.data:
                subtype['images'] = list(SubtypeImage.objects.filter(subtype_id=subtype['id']).values_list('image', flat=True))

            return Response({'subtypes': serializer.data})

        except ObjectDoesNotExist:
            return Response({"subtypes": []}, status=status.HTTP_400_BAD_REQUEST)

    # Create new Subtype
    def create_new_subtype(self, request):
        # Get params from request
        request_data = json.loads(request.body)
        images_list = request_data.get('images_list')

        try:
            serializer_context = {
                'request': Request(request),
            }
            subtype = Subtype.objects.create(name=request_data.get('name'), description=request_data.get('description'), type_id=request_data.get('type_id'))

            for image in images_list:
                format, imgstr = image.split(';base64,')
                ext = format.split('/')[-1]
                data = ContentFile(base64.b64decode(imgstr), name=subtype.name + "_" + str(uuid.uuid4()) + '.' + ext)
                SubtypeImage.objects.create(subtype=subtype, image=data)

            serializer = SubtypeSerializer([subtype], many=True, context=serializer_context)

            # Return new Subtype
            return Response({'subtype': serializer.data[0]})

        except ObjectDoesNotExist:
            return Response({"subtype": {}}, status=status.HTTP_400_BAD_REQUEST)


class StyleViewSet(viewsets.ModelViewSet):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer
    renderer_classes = (JSONRenderer,)

    # Get Styles by subtypes list
    def get_styles_by_subtypes(self, request):
        style_ids = {}
        style_list = list()

        # subtypes_list = request.POST['subtypes_list']
        request_data = json.loads(request.body)
        subtypes_list = request_data.get('subtypes_list')
        for style in Style.objects.filter(subtypes__id__in=subtypes_list):
            if style.id not in style_ids:
                style_ids[style.id] = 0
            style_ids[style.id] += 1

        for style_id in style_ids:
            if style_ids[style_id] == len(subtypes_list):
                style_list.append(style_id)

        serializer_context = {
            'request': Request(request),
        }
        styles = Style.objects.filter(id__in=style_list)
        serializer = StyleSerializer(styles, many=True, context=serializer_context)

        for style in serializer.data:
            style['images'] = StyleImage.objects.filter(style_id=style['id']).values_list('image', flat=True)

        return Response({"styles": serializer.data})

    # Get Styles by name
    def find_styles_by_name(self, request):
        # Get params from request
        request_data = json.loads(request.body)
        search_key = request_data.get('search_key')
        try:

            styles = Style.objects.all()

            for term in search_key.split(' '):
                styles = styles.filter(Q(name__istartswith=term) | Q(name__endswith=term))

            serializer_context = {
                'request': Request(request),
            }
            serializer = StyleSerializer(styles, many=True, context=serializer_context)

            for style in serializer.data:
                style['images'] = StyleImage.objects.filter(style_id=style['id']).values_list('image', flat=True)

            # Return Styles data
            return Response({'styles': serializer.data})

        except ObjectDoesNotExist:
            return Response({"styles": []}, status=status.HTTP_400_BAD_REQUEST)

    # Get all Styles
    def get_all_styles(self, request):
        try:
            styles = Style.objects.all()

            serializer_context = {
                'request': Request(request),
            }
            serializer = StyleSerializer(styles, many=True, context=serializer_context)

            for style in serializer.data:
                style['images'] = StyleImage.objects.filter(style_id=style['id']).values_list('image', flat=True)

            # Return Styles data
            return Response({'styles': serializer.data})

        except ObjectDoesNotExist:
            return Response({"styles": []}, status=status.HTTP_400_BAD_REQUEST)

    # Get all Styles
    def get_style_by_id(self, request, style_id):

        try:
            style = Style.objects.get(id=style_id)

            serializer_context = {
                'request': Request(request),
            }
            serializer = StyleSerializer([style], many=True, context=serializer_context)
            serializer.data[0]['images'] = StyleImage.objects.filter(style_id=style_id).values_list('image', flat=True)

            # Return Styles data
            return Response({'style': serializer.data[0]})

        except ObjectDoesNotExist:
            return Response({"style": {}}, status=status.HTTP_400_BAD_REQUEST)

    # Get all Styles
    def get_style_by_link(self, request, style_link):

        try:
            style = Style.objects.get(link=style_link)

            serializer_context = {
                'request': Request(request),
            }
            serializer = StyleSerializer([style], many=True, context=serializer_context)
            serializer.data[0]['images'] = StyleImage.objects.filter(style_id=style.id).values_list('image', flat=True)

            # Return Styles data
            return Response({'style': serializer.data[0]})

        except ObjectDoesNotExist:
            return Response({"style": {}}, status=status.HTTP_400_BAD_REQUEST)


    # Create new Styles
    def create_new_style(self, request):
        # Get params from request
        request_data = json.loads(request.body)
        subtypes_list = request_data.get('subtypes_list')
        images_list = request_data.get('images_list')
        name = name=request_data.get('name')
        link = name.replace(" ", "_")

        try:
            serializer_context = {
                'request': Request(request),
            }
            style = Style.objects.create(name=name, link=link, description=request_data.get('description'))
            style.subtypes = subtypes_list
            style.save()

            for image in images_list:
                format, imgstr = image.split(';base64,')
                ext = format.split('/')[-1]
                data = ContentFile(base64.b64decode(imgstr), name=style.name + "_" + str(uuid.uuid4()) + '.' + ext)
                StyleImage.objects.create(style=style, image=data)

            serializer = StyleSerializer([style], many=True, context=serializer_context)

            # Return Styles data
            return Response({'style': serializer.data[0]})

        except ObjectDoesNotExist:
            return Response({"style": {}}, status=status.HTTP_400_BAD_REQUEST)


class SubtypeImageViewSet(viewsets.ModelViewSet):
    queryset = SubtypeImage.objects.all()
    serializer_class = SubtypeImageSerializer
    renderer_classes = (JSONRenderer,)

    # Get Contacts list by User token
    def get_contacts_by_user(self, request):

        return Response({"user": "Is not active user for this token key"}, status=status.HTTP_400_BAD_REQUEST)

    # Find User`s vk friends
    def find_contacts_by_name(self, request):
        return Response({"token": "Is not active token key"}, status=status.HTTP_400_BAD_REQUEST)


class StyleImageSerializer(viewsets.ModelViewSet):
    queryset = StyleImage.objects.all()
    serializer_class = StyleImageSerializer
    renderer_classes = (JSONRenderer,)

    # Get Contacts list by User token
    def get_contacts_by_user(self, request):

        return Response({"user": "Is not active user for this token key"}, status=status.HTTP_400_BAD_REQUEST)

    # Find User`s vk friends
    def find_contacts_by_name(self, request):
        return Response({"token": "Is not active token key"}, status=status.HTTP_400_BAD_REQUEST)


class LoginViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()

    # Get User data and user token
    def user_login(self, request):

        # Get params from request
        request_data = json.loads(request.body)
        login = request_data.get('login')
        password = request_data.get('password')

        # Check User authenticate
        user = authenticate(username=login, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            request.session['auth'] = token.key

            serializer_context = {
                'request': Request(request),
            }
            return Response({'token': token.key})
        return Response({"non_field_errors": "Unable to log in with provided credentials."}, status=status.HTTP_400_BAD_REQUEST)
