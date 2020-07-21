function init() {
    render()
    enableEditMode();
};

$(function() {
    $('#image-upload-file-input').change(function() {
        const textField = document.querySelector('.text-field');
        const file = $(this)[0].files[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onloadend = function() {
            textField.contentDocument.execCommand('insertImage', true, fileReader.result);
            console.log(fileReader.result)
        }
    });
});

function enableEditMode() {
    const textField = document.querySelector('.text-field');
    textField.contentDocument.designMode = 'On';
};

function actions(command, arg = null) {
    const textField = document.querySelector('.text-field');
    textField.contentDocument.execCommand(command, false, arg);
};

function render() {
    const editor = document.querySelector('.editor')

    editor.innerHTML = ` 

    <div class="editor-header">
        <input class="ps-absolute o0" type="file" name="file" accept="image/*" id="image-upload-file-input" style="display:none;">
        <button id="undo"><i onclick="actions('undo')" class="fa fa-undo"></i></button>
        <button id="redo"><i onclick="actions('redo')" class="fa fa-repeat"></i></button>
        <button id="bold"><i onclick="actions('bold')" class="fa fa-bold"></i></button>
        <label for="image-upload-file-input" id="insertImage"><i class="fa fa-image"></i></label>
        <button id="createLink"><i onclick="actions('createLink', prompt('Coloque o link aqui', 'https://'))" class="fa fa-link"></i></button>
        <button id="unlink"><i onclick="actions('unlink')" class="fa fa-unlink"></i></button>
        <button id="insertUnorderedList"><i onclick="actions('insertUnorderedList')" class="fas fa-list-ul"></i></button>
        <button id="cut"><i onclick="actions('cut')" class="fas fa-cut"></i></button>
        <button id="copy"><i onclick="actions('copy')" class="fas fa-copy"></i></button>
        <button id="paste"><i onclick="actions('paste')" class="fas fa-paste"></i></button>
        <button id="delete"><i onclick="actions('delete')" class="fa fa-trash-alt"></i></button>
    </div>
    <iframe name="text-field" class="text-field" frameborder="0"></iframe>  
    `
};

init()
