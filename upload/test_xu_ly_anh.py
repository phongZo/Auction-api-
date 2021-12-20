import cv2
import numpy as np

# Load form
IMG_PATH_form = './resize_test2.png'
imgf = cv2.imread(IMG_PATH_form)


#cut image form.jpg

#cut số cmt
cut_img = imgf[172:220,160:380]
cut_name = 'so_cmt.jpg'
cv2.imshow(cut_name, cut_img)
cv2.imwrite(cut_name, cut_img)
cv2.waitKey(0)

#cut số tài khoản
cut_img = imgf[300:350,125:380]
cut_name = 'so_tk.jpg'
cv2.imshow(cut_name, cut_img)
cv2.imwrite(cut_name, cut_img)
cv2.waitKey(0)

#cut số tiền
cut_img = imgf[430:500,640:880]
cut_name = 'so_tien.jpg'
cv2.imshow(cut_name, cut_img)
cv2.imwrite(cut_name, cut_img)
cv2.waitKey(0)