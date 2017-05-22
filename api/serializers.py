from api.models import Type, Subtype, Style, SubtypeImage, StyleImage
from rest_framework import serializers


class TypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Type
        fields = ('id', 'name', 'description')


class SubtypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subtype
        fields = ('id', 'name', 'description', 'type', 'styles')


class StyleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Style
        fields = ('name', 'description', 'subtypes')


class SubtypeImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubtypeImage
        fields = ('id', 'image', 'subtype')


class StyleImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = StyleImage
        fields = ('id', 'image', 'style')
