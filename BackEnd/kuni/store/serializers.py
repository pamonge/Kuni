from rest_framework import serializers
from .models import Paintings, Hexagrams, ArtEssay

class PaintingsSerializer (serializers.ModelSerializer):
  class Meta:
    model = Paintings
    fields = '__all__'

class HexagramsSerializer (serializers.ModelSerializer):
  class Meta:
    model = Hexagrams
    fields = '__all__'

class ArtEssaySerializer (serializers.ModelSerializer):
  class Meta:
    model = ArtEssay
    fields = '__all__'