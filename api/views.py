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
                type['images'] = list(SubtypeImage.objects.filter(subtype__in=Subtype.objects.filter(type_id=type["id"])).values_list('image'))
            return Response({'types': serializer.data})

        except ObjectDoesNotExist:
            return Response({"types": []}, status=status.HTTP_400_BAD_REQUEST)


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
                subtype['images'] = list(SubtypeImage.objects.filter(subtype_id=subtype['id']).values_list('image'))

            return Response({'subtypes': serializer.data})

        except ObjectDoesNotExist:
            return Response({"types": []}, status=status.HTTP_400_BAD_REQUEST)


class StyleViewSet(viewsets.ModelViewSet):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer
    renderer_classes = (JSONRenderer,)

    # Get Subtypes list by Type token
    def get_style_by_subtypes(self, request):
        style_ids = {}
        style_list = list()

        subtypes_list = request.POST.getlist('subtypes_list')
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
        return Response({"styles": serializer.data})


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
