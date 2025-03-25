"use client";
import Editor from "./Editor";
import EditorToolbar from "./EditorToolbar";

export default function GuidelineEditor() {
    return (
        <div className="flex">
            <div className="basis-[6%]"></div>
            <div className="basis-[88%] flex">
                <Editor/>
                <EditorToolbar/>
            </div>
            <div className="basis-[6%]">
            </div>
        </div>
    );
};