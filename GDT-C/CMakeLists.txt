cmake_minimum_required(VERSION 3.20)
project(GDT_C)

set(CMAKE_CXX_STANDARD 14)

add_executable(GDT_C
        DirectoryTree.cpp
        driver.cpp
        GTNode.cpp)
