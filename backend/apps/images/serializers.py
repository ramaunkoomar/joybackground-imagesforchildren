from .models import Image
from rest_framework import serializers


class PostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Image
        fields = '__all__'
