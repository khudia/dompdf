<?
require_once("dompdf_config.inc.php");
$header = file_get_contents("template/header.html");
$css = '<style>'.file_get_contents("template/pdf.css").'</style>';
$footer = file_get_contents("template/footer.html");
if(strlen($_GET['title'])>0){$title='<h1>'.$_GET['title'].'<h1>';}else{$title='';}
$body = $_POST['data'];
$filename = $_GET['filename'].'.pdf';
$date = '<div align="right"><i>'.date("j F Y, g:i a").'</i></div>';
$data = $header.$css.$title.$body.$date.$footer;
$dompdf = new DOMPDF();
$dompdf->load_html($data);
$dompdf->render();
$dompdf->stream($filename);
?>