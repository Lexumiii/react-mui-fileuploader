import { PaperProps, TypographyProps, ButtonProps } from '@mui/material';
export interface FileAttachmentProps {
    /** size of the attachment */
    size: string;
    /** file content of the attachment */
    file: FileProps;
    /** index of the attachment */
    index: number;
    /** boolean to indicate if the attachment is disabled or not */
    disabled?: boolean;
    /** callback function passed to the remove button onClick handler*/
    handleRemoveFile: Function;
}
export interface ContextProps {
    addFile: Function;
    removeFile: Function;
    input: HTMLInputElement | null;
    files: ExtendedFileProps[];
}
export interface FileProps extends Blob {
    name: string;
    size: number;
    path: string;
    type: string;
    lastModified?: Date;
    lastModifiedDate?: Date;
    extension: string | undefined;
    webkitRelativePath?: string;
}
export interface FileActionProps {
    event: Event;
    files: ExtendedFileProps[];
}
export interface ExtendedFileProps extends FileProps {
    contentType?: string;
}
export interface ImageDimensionProps {
    width: number;
    height: number;
}
export interface PlaceholderImageDimensionProps {
    lg?: ImageDimensionProps;
    md?: ImageDimensionProps;
    sm?: ImageDimensionProps;
    xs?: ImageDimensionProps;
}
export interface FileUploadProps extends PaperProps {
    title?: string;
    header?: string;
    onError?: (error: string) => void;
    disabled?: boolean;
    imageSrc?: string;
    getBase64?: boolean;
    multiFile?: boolean;
    leftLabel?: string;
    rightLabel?: string;
    imageSrcAlt?: string;
    buttonLabel?: string;
    /**
     * If true and default files update then the current files will be overridden by the default files.
     */
    useDefaultFilesOnUpdate?: boolean;
    acceptedType?: string;
    maxFileSize?: number;
    maxFileUploadErrorText?: string;
    extensionExcludedErrorText?: string;
    customFilesJoinedTextSingle?: string;
    customFilesJoinedTextMulti?: string;
    bannerProps?: PaperProps;
    BannerProps?: PaperProps;
    headerProps: TypographyProps;
    HeaderProps: TypographyProps;
    labelProps: TypographyProps;
    LabelProps: TypographyProps;
    buttonProps: ButtonProps;
    ButtonProps: ButtonProps;
    buttonRemoveProps: ButtonProps;
    ButtonRemoveProps: ButtonProps;
    defaultFiles?: ExtendedFileProps[];
    onFilesChange?: (files: ExtendedFileProps[]) => void;
    onFileRemove?: (file: ExtendedFileProps) => void;
    onFileAdd?: (file: ExtendedFileProps) => void;
    onContextReady?: (context: object) => void;
    maxUploadFiles?: number;
    containerProps?: PaperProps;
    ContainerProps?: PaperProps;
    errorSizeMessage?: string;
    allowedExtensions?: string[];
    buttonRemoveLabel?: string;
    filesContainerHeight?: number;
    maxFilesContainerHeight?: number;
    showPlaceholderImage?: boolean;
    PlaceholderImageDimension?: object;
    placeholderImageDimension?: object;
    LabelsGridProps?: object;
    PlaceholderGridProps?: object;
    ImageProps?: object;
    TitleProps?: {
        fontSize: number;
    };
}
declare const _default: OverridableComponent<PaperTypeMap>;
export default _default;
