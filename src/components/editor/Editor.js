import React from 'react';

const Editor = ({ appendToMarkdownString, editorText } ) => {
    return(
        <div 
            className="
            w-80 max-w-80 h-auto flex flex-column items-center bg-light-green mt4 overflow-y-auto overflow-x-hidden shadow-2
            w-80-ns h-auto-ns flex-ns flex-column-ns items-center-ns
            w-60-l h-auto-l flex-l flex-column-l items-center-l"
        >
            <div className="w-100 h2 flex justify-center items-center bg-green shadow-3">
                <p>Editor</p>
            </div>
            <div 
                className="w-100 h-auto flex flex-column items-center shadow-2"
            >   
                <textarea 
                    className="h5 w-100 bg-light-green pa1"
                    id="editor"
                    value={editorText}
                    onChange={appendToMarkdownString}
                ></textarea>
            </div>       
        </div>
    );
}

export default Editor;
