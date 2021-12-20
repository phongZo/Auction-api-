import cv2
import numpy as np

# Load ảnh 1
IMG_PATH = 'test1.jpg'
img = cv2.imread(IMG_PATH)
# load ảnh 2
IMG_PATH2 = 'test2.png'
img2 = cv2.imread(IMG_PATH2)

#cut image test1.jpg

#cut số cmt
cut_img = img[445:515,460:745]
cut_name = 'so_cmt.jpg'
cv2.imshow(cut_name, cut_img)
cv2.imwrite(cut_name, cut_img)
cv2.waitKey(0)

#cut số tài khoản
cut_img = img[650:725,400:730]
cut_name = 'so_tk.jpg'
cv2.imshow(cut_name, cut_img)
cv2.imwrite(cut_name, cut_img)
cv2.waitKey(0)

#cut số tiền
cut_img = img[785:855,1420:1670]
cut_name = 'so_tien.jpg'
cv2.imshow(cut_name, cut_img)
cv2.imwrite(cut_name, cut_img)
cv2.waitKey(0)



#cut image test2.jpg

#cut số cmt 2
cut_img = img2[100:130,105:215]
cut_name = 'so_cmt2.png'
cv2.imshow(cut_name, cut_img)
cv2.imwrite(cut_name, cut_img)
cv2.waitKey(0)

#cut số tài khoản 2
cut_img = img2[184:209,85:223]
cut_name = 'so_tk2.png'
cv2.imshow(cut_name, cut_img)
cv2.imwrite(cut_name, cut_img)
cv2.waitKey(0)

#cut số tiền 2
cut_img = img2[270:310,465:570]
cut_name = 'so_tien2.png'
cv2.imshow(cut_name, cut_img)
cv2.imwrite(cut_name, cut_img)
cv2.waitKey(0)