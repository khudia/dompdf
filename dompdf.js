$(function(){


function ajax_download(url, data, input_name) {
    var $iframe,
        iframe_doc,
        iframe_html;

    if (($iframe = $('#download_iframe')).length === 0) {
        $iframe = $("<iframe id='download_iframe'" +
                    " style='display: none' src='about:blank'></iframe>"
                   ).appendTo("body");
    }

    iframe_doc = $iframe[0].contentWindow || $iframe[0].contentDocument;
    if (iframe_doc.document) {
        iframe_doc = iframe_doc.document;
    }

    iframe_html = "<html><head></head><body><form method='POST' action='" +
                  url +"'>" +
                  "<textarea type='hidden' name='" + input_name + "' >" +
                  data +"</textarea></form>" +
                  "</body></html>";

    iframe_doc.open();
    iframe_doc.write(iframe_html);
    $(iframe_doc).find('form').submit();
}



		$('.downloadLink').click(function(){
			var _this = $(this);
			var content = $(_this).data('content');
				content = $(content).get(0).outerHTML;
			var filename = $(_this).data('filename');
     
      if($(_this).data('title')!==undefined)
      {
        title = $(_this).data('title')
        title='&title='+title;
      }else{title='';}
			var url = $(_this).data('url');
				url = url+'/?filename='+filename+title; 
      
			 ajax_download(url, content, 'data');
		



		

	})
	})