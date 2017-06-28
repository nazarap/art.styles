from api.models import Type, Subtype, Style, SubtypeImage, StyleImage
from rest_framework import serializers


class TypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Type
        fields = ('id', 'name', 'description')


class SubtypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtype
        fields = ('id', 'name', 'description', 'type')


class StyleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Style
        fields = ('id', 'name', 'link', 'description', 'subtypes')


class SubtypeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubtypeImage
        fields = ('id', 'image', 'subtype')


class StyleImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = StyleImage
        fields = ('id', 'image', 'style')
