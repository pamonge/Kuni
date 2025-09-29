from django.db import models

class Paintings (models.Model):
  image = models.ImageField ( upload_to='paintings/', verbose_name="Imagen" )
  name = models.CharField ( max_length=150, verbose_name="Nombre" )

  def __str__(self):
    return self.name

  class Meta:
    verbose_name = 'Pintura'
    verbose_name_plural = 'Pinturas'
  

class Hexagrams (models.Model):
  lines = models.ImageField ( upload_to='lines/', verbose_name="lineas" )
  hex_name = models.CharField ( max_length=150, verbose_name="hexagrama" )

  def __str__(self):
    return self.hex_name
  
  class Meta:
    verbose_name = 'Hexagrama'
    verbose_name_plural = 'Hexagramas'

class ArtEssay (models.Model):
  essay = models.CharField ( max_length=8000, verbose_name="ensayo" )
  painting = models.ForeignKey ( Paintings, on_delete=models.CASCADE, verbose_name="Pintura" )
  main_hex = models.ForeignKey( Hexagrams , verbose_name="Hexagrama principal", on_delete=models.CASCADE, related_name='main_hex', default=0)
  sec_hex = models.ForeignKey( Hexagrams , verbose_name="Hexagrama secundario", on_delete=models.CASCADE, blank=True, null=True, related_name='second_hex')

  def __str__(self):
    return self.essay

  class Meta:
    verbose_name = 'Ensayo'
    verbose_name_plural = 'Ensayos'