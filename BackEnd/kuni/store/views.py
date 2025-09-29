from django.shortcuts import render
from rest_framework import viewsets
from .models import Paintings, ArtEssay, Hexagrams
from .serializers import PaintingsSerializer, ArtEssaySerializer, HexagramsSerializer

class PaintingsViewSet (viewsets.ModelViewSet):
  queryset = Paintings.objects.all()
  serializer_class = PaintingsSerializer

class HexagramsViewSet (viewsets.ModelViewSet):
  queryset = Hexagrams.objects.all()
  serializer_class = HexagramsSerializer

class ArtEssayViewSet (viewsets.ModelViewSet):
  queryset = ArtEssay.objects.all()
  serializer_class = ArtEssaySerializer