# Rename Files

![demo_gif](../../assets/Screencast-2020.07.23-13.49.gif)

This bash script renames all the files in a folder, based on a given basename. So you can go from this

```
dsjfkhdsjfklashdh.jpg
fndfkwfjhuewdshfjk.jpg
hjksfhdsjkfsahjkff.jpg
sdfhjdkshfksjdafhk.jpg
uriouwtoweouwt.jpg
```

to this

```
Wallpaper_01.jpg
Wallpaper_02.jpg
Wallpaper_03.jpg
Wallpaper_04.jpg
Wallpaper_05.jpg
```

## Usage

1. Download `rename-files.sh` and place the script inside the folder that contains the files which you want to rename
2. Give execution permissions to the script: `chmod 755 rename-files.sh`
3. Run the script `./rename-files.sh`
4. When asked, provide a base name to rename all your files. For example:
```
Enter the base name for the files:
Wallpaper
```
5. Done

