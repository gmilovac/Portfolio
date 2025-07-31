---
title: Peach Innovators
date: 2024/5/16
description: (RESEARCH) What makes the rowing boat move?
tag: Python, SQL
author: Gordan Milovac
---

# Peach Innovators

This project is a final project for CS1951A: Data Science in Spring of 2024 at Brown University. I was mostly working on the data gathering and management portion, and the final deliverable.

---

![Camp](/images/camp.jpg)

---

### Background

Rowing (Crew) involves propelling boats through water using oars. Athletes sit facing backward, pushing against foot stretchers with a four-phase stroke: catch, drive, finish, and recovery. The goal is to move the boat efficiently over a set distance (usually a 2 kilometer long course), either individually or as a team.

On top of working together as a crew, a successful boat relies on three key factors: stroke rate, effective length, power - generated primarily from leg drive during the stroke's drive phase. With a cumulative rowing experience of 30+ years, we have heard many rumors on what makes a rowing boat go fast. After joining the Brown Men’s Crew and having resources to test it, we have decided to once and for all prove which ones are correct. This project will show how key factors contribute to the boat speed.

**Final Deliverable PDF link:**

https://drive.google.com/file/d/1puwe_QBzJWjU9C_HLuX9HX51avXZsc10/view?usp=sharing

**Video Deliverable link:**

https://youtu.be/EOUuTH5zuDo?si=w1iWJfD8oOvf-yAu

---

![Bg](/images/tutorial.gif)

---

### Data Collection

The data is collected from a telemetry system. Telemetry enables rowers to be provided with instantaneous on-water technical and physical metrics via a screen that is fixed to the boat. It gathers data through sensors placed on the pins. This data is then processed and transmitted wirelessly for analysis.

We collected the data from the Brown Men's Crew Team over the period of about a year. The data sample is a collection of 992 unique data points, which contain these attributes: Box, Piece, Session, Piece Number, Seat, Watts, Catch Angle, Finish Angle, Catch Slip, Finish Slip, Length, Effective Length, Stroke Rate, Speed. The data was manually transcribed from the telemetry system into an Excel spreadsheet, so it was checked for anomalies during that process.

### Hypothesis

The data from the telemetry system allowed us to test each factor of a rowing stroke together and individually using the boat speed as a reference point. Our hypothesis are just assumptions based on our mutual experiences:

- Increasing Average Crew Watts increases boat Speed.
- Increasing Average Crew Effective Length increases boat Speed.
- Decreasing Variance in Crew Watts increases boat Speed.

These hypotheses aim to explore the relationship between the power output, effective length, and watt variance with boat speed. By analyzing the collected telemetry data, we seek to gain insights into the factors contributing to boat speed in rowing and their significance.

---

![Data](/images/peach.jpeg)

---

### Results and Methodology

We used a series of Pearson Correlation tests to analyze the relationships of several key variables measured by the telemetry with boat speed. The results of these regressions are shown in Table 1. Based on the results of these tests, we can infer significant positive relationships between Average Effective Length and Speed as well as Average Watts and Speed when these variables are considered separately. We also observe a significant negative relationship between Watt Variance and Speed.

To consider how the variables from our individual regressions interact with each other and Speed, we ran a multiple regression of all of the key variables on Speed. The results of this regression are shown in Table 2. The results of the model indicate that only Average Watts are significantly related with boat speed (positive relationship). The R2 of our regression is 0.476 suggesting that our model only accounts for around half of the variability in boat speed. This makes sense given the limitations of our observed variables - we expect that water and wind conditions should have a significant impact on variability in boat speed.

We developed a KERAS model utilizing a straightforward sequential architecture to prevent overfitting, training it on our dataset with a method involving 4-fold cross-validation and maintaining a 75/25 split between training and testing data within each fold. However, the model struggled to effectively learn from the data, as evidenced by an average root mean square error (RMSE) of 0.53 m/s across all folds. This RMSE value indicates an average prediction error of 0.53 m/s. Given that the variance of the data is only 0.16 m/s, this discrepancy underscores the model's learning difficulties.

---

![Table](/images/tablePeach.png)

---

### Conclusion

Our results show that of all of our analyzed key variables, Average Watts is the only significant variable related to boat speed. As we hypothesized, Average Watts are positively related to boat speed. When we considered Average Effective Length and Watt Variance independently, both variables’ relationship to boat speed were significant, however when considering all 3 key variables together, neither measurements relationship to boat speed was significant. The high RMSE of our KERAS model, however, illustrates the limitations of the size of our data and lack of controls for weather-related variables.

---

![Graph](/images/graphPeach.png)

---

### Team members and contributions

**Ian Burnett** (_iburnett_): Data gathering and modeling, tests and analysis

**Adam Von Bismarck** (_avonbism_): Visualisations, final video deliverable

**Gordan Milovac** (_gmilovac_): Data gathering and modeling, final deliverable

**Time allocated:** 50+ hours

### Challenges and Limitations

While the data collected for analysis was generally sufficient, there were notable challenges and limitations. The individual 3x2k workouts were conducted in varied stream conditions along a tidal river, impacting our variables significantly and making it difficult to isolate specific factors influencing boat speed. Additionally, the composition of boat lineups, based on rowers' abilities, introduced complexity as better rowers tended to produce higher Watts, potentially biasing our results. Furthermore, manual data extraction from the telemetry software into Excel and SQL posed minor issues, raising concerns about data accuracy and consistency. We had to clean the data to remove rows that omitted NULL values or values so far outside the realm of reasonable expectations that they signaled a broken or maladjusted sensor.
