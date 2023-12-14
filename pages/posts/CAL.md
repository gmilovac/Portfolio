---
title: CAL
date: 2023/12/13
description: Custom 3D Terrain Generator in OpenGL
tag: C++, OpenGL
author: Gordan Milovac
---

# CAL

This project is a final project for CS1230: Computer Graphics in Fall of 2023 at Brown University. I was mostly working on the Camera movement, Toon Shader and User Interface.

---

![Toon Image](/images/toonIsland.png)

---

### Project details

This project is an OpenGL application that allows users to customise and generate terrain. The user can select the type of biomes they want to generate, which can be either water, mountain, grasslands, forest or desert. Upon running the code a blank canvas shows up, prompting the user to either load an existing drawing or draw the terrain the want to generate. After running Generate Terrain a 3D model of the terrain appears. User can then move the terrain around, rotate it and zoom in and out. Two modes of shading are offered, one tries to make a realistic representation of the terrain and the other uses Toon shader, making the terrain look like a cartoon (or a comic book).

**Github repo:**

[https://github.com/gmilovac/CAL]

**Demo video:**

[https://youtu.be/RRnJ7wooko4]

---

![Main Window](/images/userInterface.png)

---

### Project Description

This project is a final project for CS1230: Introduction to Computer Graphics at Brown University. It uses OpenGL and many concepts and ideas covered in the course. Most od the code is written in C++. The project is split into two parts, the first part is a canvas where user gets to draw an image of their terrain (similar to the Raster Project) and the second part is the terrain generation (similar to the Terrain Lab) which implements some new concepts such as Noise maps, Height maps and Toon Shading.

---

![Fully Drawn](/images/finishedDrawing.png)

---

### Design Choices

**Biome Transitions:**

As each biome has a different height and noise function, the transitions between biomes were not smooth enough. Adding the blur radius helps with making those transitions look more natural. On top of that, some additional parameters were added (all for aesthetic purposes). Anything above the water level but not quite grassland is considered to be sand(desert). Transition from a grassland to a mountain occasionally made grasslands very tall, so now it turns them into a mountain biome at a lover point. Mountain peaks and some really tall locations have snow on them. No biome can be generated below the water level.

**Position(Height) Mapping:**

Upon loading/drawing an image, the program generates a height and noise map for the terrain generation. Both are biome dependant. To get the actual position (height in this case) on the 3D model, both noise and height maps are used. Since the Perlin function calculation is very expensive, in order for code to render faster, generateTerrain() stores a height map for each location on the canvas. This allows the program to only calculate the Perlin function once and render in less than a second.

**Toon Shading:**

Toon shading is a type of non-photorealistic rendering designed to make 3D computer graphics appear to be flat. Toon shading is also known as cel shading. The name comes from a traditional animation process used to add shading to cartoons. The code used in our shader is based on the code from the following website: [https://www.reddit.com/r/opengl/comments/1cwynl/toon_shader/]

**User Interface:**

As stated above, user interface is pretty similar to the one in the Raster Project. Every time a new image is loaded, a new pop-up window generates. User can have multiple terrains generated at the same time (all of which support resizing). Buttons have the most necessary functions, such as loading an image, saving an image, generating a terrain and activating/deactivating Toon Shading. The rest of the functions are done using keyboard and mouse. User can move the terrain around, rotate it and zoom in and out. User can also change the blur radius which changes the sharpness of the transitions between biomes.

---

![Output](/images/topIsland.png)

---

### Team members and contributions

**Marcus Winter** (_mwinter20_): Terrain generation, Noise and Height map generation

**Gordan Milovac** (_gmilovac_): Terrain movement, Toon shading, User Interface

**Time allocated:** 30+ hours

### Errors / bugs

None found

---

![3D Shader](/images/coolIsland.png)

---

### How to

**Build and run your program:**

- Build the project using the CMakeLists.txt file found in the root directory of the project

- Run the executable found in the build directory (or just by releasing it in Qt or CLion)

- Click on the "Upload Image" button to load an existing drawing or draw your own terrain using the Constant and Fill Brush

- Choose the type of biomes you want to generate and use their colors to color them in

- Optional: Change the blur radius (lower blur radius makes the transitions sharper)

- Click on the "Generate Terrain" button to generate the terrain

- Use the W,A,S,D,Ctrl,Space keys and mouse to move the terrain around, rotate it and zoom in and out

- Use T key to activate/deactivate Toon Shading

- Click on the "Save Image" button in case you liked the output and want to save the image

You can now use our OpenGL app!
