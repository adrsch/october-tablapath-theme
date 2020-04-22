# Tablapath theme for October CMS
This is a one-page theme designed to be flexable and highly customizable without needing to touch code.

## Installation and setup
Place the october-tablapath-theme folder in the theme folder in your root October directory.

The Pages plugin is highly recommended:
https://octobercms.com/docs/cms/pages

This will allow you to edit the sections of the site using a rich-text editor.

Once everything is installed, go through each tab of the customization page after installation to setup and customize the site.
Some fields have values with units: px, em, or rem. Any of these can be used in a field in which units are present.

## Common tasks
### Adding sections to the site
##### With the Pages plugin
- Go to Pages, then Content on the side bar. Press `Add` to make a new page, and take note of the page's file name. Enter all section content (other than the title).
- Next, go to the Sections tab of the customization page and add a new section. Put in the filename from the pages editor.
    - If the content is Example, the file will be `example.htm`. Enter this.
- Using the site-wide background will show the color, image, or slideshow set on the Intro tab.

##### Without the Pages plugin
- Go to CMS, then content, and create a new file. Take note of the file name and enter it in the Sections tab of the customization page.

### Adding a footer
- Create the footer content in the same way as section content is created
- Enter the filename, ex. `footer.htm`, in the Footer tab. 

### Adding a font from Google Fonts to the site
- Go to Google Fonts and copy the HTML code for embedding the font in your site.
```
<link href="https://fonts.googleapis.com/css?family=Lato:300i,400,400i,700,900" rel="stylesheet">
```
- Paste this under `Other head code` in the General customization tab. Next, you can use the font on the Typography tab. With the above example, you would enter `Lato` in the font field.
