from django.shortcuts import render
from django.shortcuts import redirect
from django.http import JsonResponse

"""
import matplotlib.pyplot as plt

from pylab import rcParams
"""

import numpy as np
import cv2.cv2
from PIL import ImageGrab, Image
import pytesseract

# Create your views here.



def home(request):
    r = ''
    if request.user.is_authenticated:
        return render(request, 'home.html', {})
    else:
        return redirect("/admin")


def new(request):
    r = ''
    if request.user.is_authenticated:
        return render(request, 'new.html', {})
    else:
        return redirect("/admin")


def ajax(request):
    leftTR = request.GET.get('leftTR', None)
    topTR = request.GET.get('topTR', None)
    widthTR = request.GET.get('widthTR', None)
    heightTR = request.GET.get('heightTR', None)
    image = ImageGrab.grab(bbox=(int(leftTR), int(topTR), int(widthTR), int(heightTR)))
    imageUp = np.array(image)
    cv2.imwrite("blogs/zenetare.png", imageUp)
    cv2.destroyAllWindows()
    za1 = Image.open("blogs/zenetare.png")
    za = pytesseract.image_to_string(za1.convert("RGB"), lang="eng")



    fa = {
        'ti': za
    }
    return JsonResponse(fa)
