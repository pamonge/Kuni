from django.contrib import admin
from .models import Paintings, Hexagrams, ArtEssay

class ArtEssayAdmin (admin.ModelAdmin):
  list_filter = ('main_hex', 'sec_hex')

admin.site.register(Paintings)
admin.site.register(Hexagrams)
admin.site.register(ArtEssay)

