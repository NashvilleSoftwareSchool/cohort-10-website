## Instructions for Future Cohort Sites

### Setting Up Repository

* Get an administrator or instructor to create a repo for your cohort under the NSS organization Github account.
* Download the zip files from this repo on Github or clone the repo.
* Inside the project directory, 'vi .git/config' or open the config file in the .git directory from another text editor.
* Change the origin url to the repo created for you under the NSS organization acount (e.g. https://github.com/NashvilleSoftwareSchool/cohort-10-website.git)
* Save and close the file, and run git push origin master to push up the copied files.
* Start developing!

### Photo Editing

 Because the group photos and headshots are large files, it will be necessary to either minify or batch-edit them using a photo editor like Photoshop.

 #### Minify

 * Use the Gruntfile.js located in this repo, and change the "cwd" (path to originals) and "dest" (path to where you want the minified photos to be) properties under "imagemin" to suit your directory structure.
 * Run `grunt imagemin` from the root directory.

 #### Photoshop

 * Create a new destination directory (either in the project directory or somewhere else on your machine). 
 * Open Photoshop
 * File > Scripts > Image Processor
 * In the window, select the directory that contains the original photos and the destination directory in steps 1 and 2.
 * In step 3, make sure "Save as JPEG" is set. Quality should be around 7 or 8.
 * Enter the dimensions for the resized photo, e.g. W: 600 H:300. The photos will maintain their proportions to fit inside the dimensions you specify, but they will not bloat or stretch.
 * Click "Run". You should now have the resized photos in the destination directory, which you can include in the class site project.
 