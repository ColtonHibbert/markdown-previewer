import React from 'react';

const Previewer = ({getMarkdownText}) => {
    return(
        <div 
            className="
            w-90 flex flex-column items-center bg-light-green mt4 overflow-y-auto shadow-2
            w-90-ns flex-ns flex-column-ns items-center-ns
            w-80-l flex-l flex-column-l items-center-l"
        >
             <div className="w-100 h2 flex justify-center items-center bg-green shadow-3">
                <p>Previewer</p>
            </div>
            <div 
                className="vh-100 w-100 flex pa1"
            >
                <div 
                    id="preview"
                    dangerouslySetInnerHTML={getMarkdownText()}
                >
                </div>
            </div>
        </div>
    );
}

export default Previewer;