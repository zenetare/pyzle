import cv2
import numpy as np

img = cv2.imread('zenetare.png')

cv2.imshow('Img', img)
cv2.waitKey(0)
cv2.destroyAllWindows()
