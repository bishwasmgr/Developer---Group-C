#!/usr/bin//env python3

import os
import re
import shutil
import time

#批量替换文件名称
def file_rename():
    #获取当前目录下所有文件
    files = os.listdir(".")
    for file in files:
        #匹配文件名中的数字
        result = re.findall(r"\d+", file)
        if result:
            #获取文件名中的数字
            num = result[0]
            #新文件名
            new_name = "test" + num + ".txt"
            #重命名
            os.rename(file, new_name)
            print("重命名成功")
        else:
            print("无数字")

if __name__ == '__main__':
    file_rename()