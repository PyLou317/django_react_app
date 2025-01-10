from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
    
class CreatRoomView(APIView):
    serializer_class = CreateRoomSerializer
    
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
            
        serialzer = self.serializer.is_valid()
        if serialzer.is_valid():
            guest_can_pause = serialzer.data.guest_can_pause
            votes_to_skip = serialzer.data.votes_to_skip
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip