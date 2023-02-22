const test = document.getElementById("test")

function textToHtml(text, element = 'pre') {
  // Replace new lines with HTML line breaks
  let html = text.replace(/\n/g, '<br>');

  // Replace spaces with non-breaking spaces
  html = html.replace(/ /g, '&nbsp;');

  // Replace leading and trailing white spaces in each line
  html = html.replace(/^( +)|( +)$/gm, m => '&nbsp;'.repeat(m.length));

  // Replace tabs with non-breaking spaces
  html = html.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');

  // Wrap the HTML in the specified element to preserve spacing
  html = '<' + element + '>' + html + '</' + element + '>';

  return html;
}

const text = 'Hello,   \n\n\tworld!  \n\n    This is a test.  \n';
const html = textToHtml(text);
test.innerText = html
