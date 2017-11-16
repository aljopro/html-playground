document.addEventListener("DOMContentLoaded", function() {
	var template = '<!doctype html><html lang=""><head><style>{{css_editor}}</style><script>{{javascript_editor}}</script></head><body>{{html_editor}}</body></html>';
	var iframe = document.getElementById('code_preview');
	var editors = Array.prototype.slice.call(document.querySelectorAll('.editor'));

	function onblurHandler(event) {
		var iframeHtml = template;
		editors.forEach(function(editor) {
			if (!editor.id) {
				return;
			}
			iframeHtml = iframeHtml.replace('{{' + editor.id + '}}', editor.value);
		});

		iframe.contentWindow.document.open();
		iframe.contentWindow.document.write(iframeHtml);
		iframe.contentWindow.document.close();
	}

	editors.forEach(function(editor) {
		console.log(editor);
		editor.addEventListener('blur', onblurHandler);
	})
});
