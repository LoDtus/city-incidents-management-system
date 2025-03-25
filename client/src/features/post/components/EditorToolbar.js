"use client";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import editorSlice from '@/redux/slices/editorSlice';

export default function EditorToolbar() {
    const dispatch = useDispatch();

    function exportGuideline() {

    }

    return (
        <div className="bg-white w-full h-full ml-1 border border-gray-border">
            <div className="bg-white w-full h-[100px] mb-1 rounded-md border border-dashed flex items-center justify-center">
                <span>Thumbnail</span>
            </div>
            <Button
                className="w-full mb-1 !font-semibold
                    duration-100 active:scale-90"
                variant="solid" color="primary"
                onClick={() => dispatch(editorSlice.actions.setPreview(true))}
            >
                Preview
            </Button>
            <Button
                className="w-full mb-1 !font-semibold
                    duration-100 active:scale-90"
                variant="solid" color="danger"
                onClick={() => dispatch(editorSlice.actions.setSave(true))}
            >
                Add
                {/* Save */}
            </Button>
            <Button
                className="w-full mb-1 !font-semibold
                    duration-100 active:scale-90"
                variant="solid" color="orange"
                onClick={() => dispatch(editorSlice.actions.setImport(true))}
            >
                Import
            </Button>
            <Button
                className="w-full mb-1 !font-semibold
                    duration-100 active:scale-90"
                variant="solid" color="green"
                onClick={() => exportGuideline()}
            >
                Export
            </Button>
        </div>
    );
};