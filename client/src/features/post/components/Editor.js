"use client";
import '../ckeditor-style.css';
import '../custom-ckeditor-style.css';
import 'ckeditor5/ckeditor5.css';
import { DecoupledEditor, Alignment, AutoImage, AutoLink, Autosave, Base64UploadAdapter, BlockQuote, Bold, Code, CodeBlock, Essentials, FindAndReplace, FontBackgroundColor, FontColor, FontFamily, FontSize, GeneralHtmlSupport, Heading, Highlight, ImageBlock, ImageCaption, ImageEditing, ImageInline, ImageInsert, ImageInsertViaUrl, ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, ImageUpload, ImageUtils, Indent, IndentBlock, Italic, Link, LinkImage, List, ListProperties, MediaEmbed, Minimap, Paragraph, PasteFromOffice, RemoveFormat, SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextPartLanguage, Title, TodoList, Underline } from "ckeditor5";
import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import guidelineSlice from '@/redux/slices/guidelineSlice';
import { getEditor, getGuideline } from '@/redux/selectors';

export default function App() {
    const editorContainerRef = useRef(null);
    const editorMenuBarRef = useRef(null);
    const editorToolbarRef = useRef(null);
    const editorRef = useRef(null);
    const editorMinimapRef = useRef(null);
    const [ isLayoutReady, setIsLayoutReady ] = useState(false);

    const dispatch = useDispatch();
    const isPreview = useSelector((state) => getEditor(state).preview);
    const content = useSelector((state) => getGuideline(state).content);
    const containerRef = useRef(null);
    const previewRef = useRef(null);
    const [ editorReady, setEditorReady ] = useState(false);
    const [ previewReady, setPreviewReady ] = useState(false);

    const { editorConfig } = useMemo(() => {
        if (!isLayoutReady) {
            return {};
        }

        return {
            editorConfig: {
                toolbar: {
                    items: [
                        'heading',
                        '|',
                        'fontSize',
                        'fontFamily',
                        'fontColor',
                        'fontBackgroundColor',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        '|',
                        'link',
                        'insertImage',
                        'highlight',
                        '|',
                        'alignment',
                        '|',
                        'bulletedList',
                        'numberedList',
                        'todoList',
                        'outdent',
                        'indent',
                        'insertTable',
                        'blockQuote',
                        'codeBlock',
                    ],
                    shouldNotGroupWhenFull: false
                },
                plugins: [
                    Alignment,
                    AutoImage,
                    AutoLink,
                    Autosave,
                    Base64UploadAdapter,
                    BlockQuote,
                    Bold,
                    Code,
                    CodeBlock,
                    Essentials,
                    FindAndReplace,
                    FontBackgroundColor,
                    FontColor,
                    FontFamily,
                    FontSize,
                    GeneralHtmlSupport,
                    Heading,
                    Highlight,
                    ImageBlock,
                    ImageCaption,
                    ImageEditing,
                    ImageInline,
                    ImageInsert,
                    ImageInsertViaUrl,
                    ImageResize,
                    ImageStyle,
                    ImageTextAlternative,
                    ImageToolbar,
                    ImageUpload,
                    ImageUtils,
                    Indent,
                    IndentBlock,
                    Italic,
                    Link,
                    LinkImage,
                    List,
                    ListProperties,
                    MediaEmbed,
                    Minimap,
                    Paragraph,
                    PasteFromOffice,
                    RemoveFormat,
                    SpecialCharacters,
                    SpecialCharactersArrows,
                    SpecialCharactersCurrency,
                    SpecialCharactersEssentials,
                    SpecialCharactersLatin,
                    SpecialCharactersMathematical,
                    SpecialCharactersText,
                    Strikethrough,
                    Subscript,
                    Superscript,
                    Table,
                    TableCaption,
                    TableCellProperties,
                    TableColumnResize,
                    TableProperties,
                    TableToolbar,
                    TextPartLanguage,
                    Title,
                    TodoList,
                    Underline,
                ],
                fontFamily: {
                    supportAllValues: true
                },
                heading: {
                    options: [
                        {
                            model: 'paragraph',
                            title: 'Paragraph',
                            class: 'ck-heading_paragraph'
                        },
                        {
                            model: 'heading1',
                            view: 'h1',
                            title: 'Heading 1',
                            class: 'ck-heading_heading1'
                        },
                        {
                            model: 'heading2',
                            view: 'h2',
                            title: 'Heading 2',
                            class: 'ck-heading_heading2'
                        },
                        {
                            model: 'heading3',
                            view: 'h3',
                            title: 'Heading 3',
                            class: 'ck-heading_heading3'
                        },
                        {
                            model: 'heading4',
                            view: 'h4',
                            title: 'Heading 4',
                            class: 'ck-heading_heading4'
                        },
                    ]
                },
                fontSize: {
                    options: [10, 12, 14, 'default', 18, 20, 22],
                    supportAllValues: true
                },
                htmlSupport: {
                    allow: [
                        {
                            name: /^.*$/,
                            styles: true,
                            attributes: true,
                            classes: true
                        }
                    ]
                },
                image: {
                    toolbar: [
                        'toggleImageCaption',
                        'imageTextAlternative',
                        '|',
                        'imageStyle:inline',
                        'imageStyle:wrapText',
                        'imageStyle:breakText',
                        '|',
                        'resizeImage'
                    ]
                },
                link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://',
                    decorators: {
                        toggleDownloadable: {
                            mode: 'manual',
                            label: 'Downloadable',
                            attributes: {
                                download: 'file'
                            }
                        }
                    }
                },
                list: {
                    properties: {
                        styles: true,
                        startIndex: true,
                        reversed: true
                    }
                },
                menuBar: {
                    isVisible: true
                },
                minimap: {
                    container: editorMinimapRef.current,
                    extraClasses: 'editor-container_include-minimap ck-minimap__iframe-content'
                },
                table: {
                    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
                },
                initialData: '',
                title: {
                    placeholder: 'Nhập tiêu đề bài viết'
                },
                placeholder: 'Nhập nội dung bài viết của bạn',
            }
        };
    }, [isLayoutReady]);

    useEffect(() => {
        setIsLayoutReady(true);
        return () => setIsLayoutReady(false);
    }, []);

	useEffect(() => {
		if (!isPreview && isLayoutReady && editorRef.current.setData) {
			editorRef.current.setData(content);
		}
	}, [editorReady, content]);

	useEffect(() => {
		if (isPreview && previewRef && previewReady) {
			const editableElement = previewRef.current.ui.view.editable.element;
            editableElement.contentEditable = false;
			editableElement.style.background = '#f2f5f9';
			//scroll
			containerRef.current.classList.add('!border-none');
			previewRef.current.setData(content);
		}
	}, [previewReady, content]);

    return (
        <div className="main-container w-full">
            <div
                ref={editorContainerRef}
                className="editor-container editor-container_document-editor editor-container_include-minimap
                    !border-0 flex"
            >
                <div className='ml-1'>
                    { isPreview ? <div></div> :
                        <div className='sticky top-0 z-10 px-1 pb-1 mb-1 border border-gray-border bg-white'>
                            <div ref={editorMenuBarRef}
                                className="editor-container__menu-bar"
                            ></div>
                            <div ref={editorToolbarRef}
                                className="editor-container__toolbar
                                    border-x border-gray-border"
                            ></div>
                        </div>
                    }
                    <div className="editor-container__minimap-wrapper">
                        { isPreview ? <div></div> :
                            <div className="editor-container__sidebar editor-container__sidebar_minimap
                                !mr-1 border border-gray-border">
                                <div ref={editorMinimapRef}></div>
                            </div>
                        }
                        <div ref={containerRef}
                            className="editor-container__editor-wrapper
                            border border-gray-border">
                            <div className="editor-container__editor">
                                { isLayoutReady && !isPreview && (
                                    <CKEditor
                                        ref={editorRef}
                                        onReady={editor => {
                                            editorToolbarRef.current.appendChild(editor.ui.view.toolbar.element);
                                            editorMenuBarRef.current.appendChild(editor.ui.view.menuBarView.element);
                                            setEditorReady(true);
                                        }}
                                        onAfterDestroy={() => {
                                            if (editorToolbarRef.current) Array.from(editorToolbarRef.current.children).forEach(child => child.remove());
                                            if (editorMenuBarRef.current) Array.from(editorMenuBarRef.current.children).forEach(child => child.remove());
                                        }}
                                        editor={DecoupledEditor}
                                        config={editorConfig}
                                        data={''}
                                        onChange={(event, editor) => dispatch(guidelineSlice.actions.setContent(editor.getData()))}
                                    />
                                )}
                                { isLayoutReady && isPreview && (
                                    <CKEditor
                                        ref={previewRef}
                                        onReady={editor => {
                                            previewRef.current = editor;
                                            setPreviewReady(true);
                                        }}
                                        editor={DecoupledEditor}
                                        config={editorConfig}
                                        data={''}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};