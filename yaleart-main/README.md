# YaleArt 

## Project Overview
This is a better version of the offical Yale School Of Art Website. 

## How to Run Locally
1. Open the folder in **VS Code**.
2. Please install the Live Server extention on VS Code.
2. Right-click `home.html` and click **"Open with Live Server"**.
3. To see the phone version, right-click and hit **"Inspect"** then click the little phone icon on the top left.

## Features
* **Hamburger Menu:** On a phone, the menu hides and you get a burger button that slides the links out.
* **Desktop View:** When the screen is 1280px wide, the menu turns into a normal bar at the top.
* **Grid Stuff:** The boxes on the Admissions and Events pages stack on top of each other on mobile so you don't have to scroll sideways.
* **Contact Form:** The form actually works and sends you to a "Success" page when you hit submit.

## Testing
* Checked it on **375px** (phone) and **1280px** (desktop) to make sure it looks right.
* Clicked every single link to make sure none of them are broken.
* The hamburger menu opens and closes perfectly on every page.

## The checklist

 Search bar works and shows results while typing
 Search updates instantly (no submit needed)
 Clearing the search removes suggestions
 Shows “no results” if nothing matches
 Clicking a result takes you to the right page
 Loading bar added to login button
 Loading animation plays when login is clicked
 Button disables while loading so it can’t be spammed
 Shows “Signed In ” after loading finishes
 Page fade in/out animation when switching pages
 Hover effects added on cards and sections
 Animations are smooth and not laggy
 No console errors
 Everything works across all pages

## People
* Sumran Nasir
* Seif Asfar
* Nick Shaw
* Jahriq Redfearn

## for teamates
Use this code to fetch teammates changes

cd ~/yaleart
git pull origin main

Use this code to commit changes

git add .
git commit -m "your message here"
git push origin main