#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
@Time    : 2020/4/1 10:01
@File    : hello.py
@Software: PyCharm
@Desc    : 
"""

#批量替换文件名称
import os
import re
import shutil
import time
import datetime
import xlrd
import xlwt
from xlutils.copy import copy
if __name__ == '__main__':
    if os.path.exists("./test.xls"):
        print("文件存在")
