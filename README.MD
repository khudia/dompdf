## Library to save dom element to pdf file ##

**Requements**

	jQuery >= 1.4.3

**Description**

Folder contents all files that show be places in any place you need.There several files and folders you will work with:

1. **dompdf.min.js** = actions file for library
2. **getpdf.php** = file generating pdf to download
3. **templates** = folder contains necessary files to style your pdf file
4. **templates/pdf.css** = css styles for pdf file
5. **templates/header.html** = header of your pdf file
6. **templates/footer.html** = footer for your pdf file

**Installing**

1. Include jQuery and actions file
2. Create download link like so:


`<a href="javascript" class="downloadLink" data-title="Sample title for pdf file" data-content="#toPdf" data-url='dompdf/getpdf.php' data-filename="price">Download pdf
</a>`

**Atributes**

- class = to bind link
- content = selector to put in pdf file
- url = path to pdf generator file
- filename = the name of future pdf file
- title = <h1> Title before content