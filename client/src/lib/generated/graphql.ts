import { GraphQLResolveInfo } from 'graphql'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Action = {
  __typename?: 'Action'
  details: Maybe<Array<Maybe<PlainElement>>>
  instruction: Maybe<Paragraph>
  results: Maybe<Array<Maybe<PlainElement>>>
}

export type Author = {
  __typename?: 'Author'
  id: Maybe<Scalars['ID']>
}

export type CarouselImage = {
  __typename?: 'CarouselImage'
  images: Maybe<Array<Maybe<Image>>>
}

export type Command = {
  __typename?: 'Command'
  text: Maybe<Scalars['String']>
}

export type CommandOutput = {
  __typename?: 'CommandOutput'
  text: Maybe<Scalars['String']>
}

export type DecorateTextChunksInput = {
  __typename?: 'DecorateTextChunksInput'
  chunks: Array<Maybe<TextChunkWithOperation>>
}

export type DirectoryStructure = {
  __typename?: 'DirectoryStructure'
  contents: Maybe<Array<Maybe<Scalars['String']>>>
}

export type File = {
  __typename?: 'File'
  content: Maybe<Scalars['String']>
  fileName: Maybe<Scalars['String']>
}

export type FileMultiple = {
  __typename?: 'FileMultiple'
  files: Maybe<Array<Maybe<File>>>
}

export type FileTree = {
  __typename?: 'FileTree'
  treeNodes: Maybe<Array<Maybe<FileTreeNode>>>
}

export type FileTreeNode = {
  __typename?: 'FileTreeNode'
  depth: Maybe<Scalars['Int']>
  name: Maybe<Scalars['String']>
  nodeType: Maybe<FileTreeNodeType>
}

export enum FileTreeNodeType {
  Directorynode = 'DIRECTORYNODE',
  Filenode = 'FILENODE',
}

export type Foldable = {
  __typename?: 'Foldable'
  elements: Maybe<Array<Maybe<PlainElement>>>
  shortDescription: Maybe<Scalars['String']>
}

export type Image = {
  __typename?: 'Image'
  alt: Maybe<Scalars['String']>
  caption: Maybe<Scalars['String']>
  height: Maybe<Scalars['Int']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Int']>
}

export type Note = {
  __typename?: 'Note'
  body: Maybe<Scalars['String']>
}

export type Page = {
  __typename?: 'Page'
  id: Maybe<Scalars['ID']>
  nextPageNum: Maybe<Scalars['String']>
  pageElements: Maybe<Array<Maybe<PageElement>>>
  pageNum: Maybe<Scalars['String']>
  prevPageNum: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
}

/**
 * PageElement === PlainElement | Action | Foldable
 * Action and Foldable allow nesting, but only one level of nesting.
 */
export type PageElement =
  | Action
  | CarouselImage
  | Command
  | CommandOutput
  | Foldable
  | Paragraph
  | Subtitle
  | Video

export type Paragraph = {
  __typename?: 'Paragraph'
  chunks: Maybe<Array<Maybe<TextChunk>>>
}

/** PlainElement does not allow nesting itself */
export type PlainElement =
  | CarouselImage
  | Command
  | CommandOutput
  | Paragraph
  | Subtitle
  | Video

export type Query = {
  __typename?: 'Query'
  action: Maybe<Action>
  carousel: Maybe<CarouselImage>
  file: Maybe<File>
  filemultiple: Maybe<FileMultiple>
  filetree: Maybe<FileTree>
  foldable: Maybe<Foldable>
  tutorial: Maybe<Tutorial>
  video: Maybe<Video>
}

export type Subtitle = {
  __typename?: 'Subtitle'
  text: Maybe<Scalars['String']>
}

export type TextChunk = {
  __typename?: 'TextChunk'
  bold: Maybe<Scalars['Boolean']>
  highlight: Maybe<Scalars['Boolean']>
  hyperlinkUrl: Maybe<Scalars['String']>
  inlineCode: Maybe<Scalars['Boolean']>
  strikeout: Maybe<Scalars['Boolean']>
  text: Maybe<Scalars['String']>
}

export type TextChunkModifyOperation = {
  __typename?: 'TextChunkModifyOperation'
  bold: Maybe<Scalars['Boolean']>
  highlight: Maybe<Scalars['Boolean']>
  hyperlinkUrl: Maybe<Scalars['String']>
  strikeout: Maybe<Scalars['Boolean']>
  text: Maybe<Scalars['String']>
}

export type TextChunkOperation =
  | TextChunkModifyOperation
  | TextChunkSplitOperation

export type TextChunkSplitOperation = {
  __typename?: 'TextChunkSplitOperation'
  splitAt: Scalars['Int']
  splitFirstHalfOperation: Maybe<TextChunkModifyOperation>
  splitSecondHalfOperation: Maybe<TextChunkModifyOperation>
}

export type TextChunkWithOperation = {
  __typename?: 'TextChunkWithOperation'
  chunk: TextChunk
  operation: Maybe<TextChunkOperation>
}

export type Tutorial = {
  __typename?: 'Tutorial'
  author: Maybe<Author>
  id: Maybe<Scalars['ID']>
  pages: Maybe<Array<Maybe<Page>>>
  title: Maybe<Scalars['String']>
}

export type Video = {
  __typename?: 'Video'
  caption: Maybe<Scalars['String']>
  platform: Maybe<VideoPlatform>
  url: Maybe<Scalars['String']>
}

export enum VideoPlatform {
  Vimeo = 'VIMEO',
  Youtube = 'YOUTUBE',
}

export type MainQueryVariables = Exact<{ [key: string]: never }>

export type MainQuery = {
  __typename?: 'Query'
  tutorial:
    | {
        __typename?: 'Tutorial'
        id: string | null | undefined
        title: string | null | undefined
        author:
          | { __typename?: 'Author'; id: string | null | undefined }
          | null
          | undefined
        pages:
          | Array<
              | {
                  __typename?: 'Page'
                  id: string | null | undefined
                  pageNum: string | null | undefined
                  nextPageNum: string | null | undefined
                  prevPageNum: string | null | undefined
                  title: string | null | undefined
                  pageElements:
                    | Array<
                        | {
                            __typename?: 'Action'
                            instruction:
                              | {
                                  __typename?: 'Paragraph'
                                  chunks:
                                    | Array<
                                        | {
                                            __typename?: 'TextChunk'
                                            text: string | null | undefined
                                            highlight:
                                              | boolean
                                              | null
                                              | undefined
                                            bold: boolean | null | undefined
                                            hyperlinkUrl:
                                              | string
                                              | null
                                              | undefined
                                            strikeout:
                                              | boolean
                                              | null
                                              | undefined
                                            inlineCode:
                                              | boolean
                                              | null
                                              | undefined
                                          }
                                        | null
                                        | undefined
                                      >
                                    | null
                                    | undefined
                                }
                              | null
                              | undefined
                            details:
                              | Array<
                                  | {
                                      __typename?: 'CarouselImage'
                                      images:
                                        | Array<
                                            | {
                                                __typename?: 'Image'
                                                caption:
                                                  | string
                                                  | null
                                                  | undefined
                                                url: string | null | undefined
                                                alt: string | null | undefined
                                                width: number | null | undefined
                                                height:
                                                  | number
                                                  | null
                                                  | undefined
                                              }
                                            | null
                                            | undefined
                                          >
                                        | null
                                        | undefined
                                    }
                                  | {
                                      __typename?: 'Command'
                                      text: string | null | undefined
                                    }
                                  | {
                                      __typename?: 'CommandOutput'
                                      text: string | null | undefined
                                    }
                                  | {
                                      __typename?: 'Paragraph'
                                      chunks:
                                        | Array<
                                            | {
                                                __typename?: 'TextChunk'
                                                text: string | null | undefined
                                                highlight:
                                                  | boolean
                                                  | null
                                                  | undefined
                                                bold: boolean | null | undefined
                                                hyperlinkUrl:
                                                  | string
                                                  | null
                                                  | undefined
                                                strikeout:
                                                  | boolean
                                                  | null
                                                  | undefined
                                                inlineCode:
                                                  | boolean
                                                  | null
                                                  | undefined
                                              }
                                            | null
                                            | undefined
                                          >
                                        | null
                                        | undefined
                                    }
                                  | {
                                      __typename?: 'Subtitle'
                                      text: string | null | undefined
                                    }
                                  | {
                                      __typename?: 'Video'
                                      platform: VideoPlatform | null | undefined
                                      url: string | null | undefined
                                      caption: string | null | undefined
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined
                            results:
                              | Array<
                                  | {
                                      __typename?: 'CarouselImage'
                                      images:
                                        | Array<
                                            | {
                                                __typename?: 'Image'
                                                caption:
                                                  | string
                                                  | null
                                                  | undefined
                                                url: string | null | undefined
                                                alt: string | null | undefined
                                                width: number | null | undefined
                                                height:
                                                  | number
                                                  | null
                                                  | undefined
                                              }
                                            | null
                                            | undefined
                                          >
                                        | null
                                        | undefined
                                    }
                                  | {
                                      __typename?: 'Command'
                                      text: string | null | undefined
                                    }
                                  | {
                                      __typename?: 'CommandOutput'
                                      text: string | null | undefined
                                    }
                                  | {
                                      __typename?: 'Paragraph'
                                      chunks:
                                        | Array<
                                            | {
                                                __typename?: 'TextChunk'
                                                text: string | null | undefined
                                                highlight:
                                                  | boolean
                                                  | null
                                                  | undefined
                                                bold: boolean | null | undefined
                                                hyperlinkUrl:
                                                  | string
                                                  | null
                                                  | undefined
                                                strikeout:
                                                  | boolean
                                                  | null
                                                  | undefined
                                                inlineCode:
                                                  | boolean
                                                  | null
                                                  | undefined
                                              }
                                            | null
                                            | undefined
                                          >
                                        | null
                                        | undefined
                                    }
                                  | {
                                      __typename?: 'Subtitle'
                                      text: string | null | undefined
                                    }
                                  | {
                                      __typename?: 'Video'
                                      platform: VideoPlatform | null | undefined
                                      url: string | null | undefined
                                      caption: string | null | undefined
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined
                          }
                        | {
                            __typename?: 'CarouselImage'
                            images:
                              | Array<
                                  | {
                                      __typename?: 'Image'
                                      caption: string | null | undefined
                                      url: string | null | undefined
                                      alt: string | null | undefined
                                      width: number | null | undefined
                                      height: number | null | undefined
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined
                          }
                        | {
                            __typename?: 'Command'
                            text: string | null | undefined
                          }
                        | {
                            __typename?: 'CommandOutput'
                            text: string | null | undefined
                          }
                        | {
                            __typename?: 'Foldable'
                            shortDescription: string | null | undefined
                            elements:
                              | Array<
                                  | {
                                      __typename?: 'CarouselImage'
                                      images:
                                        | Array<
                                            | {
                                                __typename?: 'Image'
                                                caption:
                                                  | string
                                                  | null
                                                  | undefined
                                                url: string | null | undefined
                                                alt: string | null | undefined
                                                width: number | null | undefined
                                                height:
                                                  | number
                                                  | null
                                                  | undefined
                                              }
                                            | null
                                            | undefined
                                          >
                                        | null
                                        | undefined
                                    }
                                  | {
                                      __typename?: 'Command'
                                      text: string | null | undefined
                                    }
                                  | {
                                      __typename?: 'CommandOutput'
                                      text: string | null | undefined
                                    }
                                  | {
                                      __typename?: 'Paragraph'
                                      chunks:
                                        | Array<
                                            | {
                                                __typename?: 'TextChunk'
                                                text: string | null | undefined
                                                highlight:
                                                  | boolean
                                                  | null
                                                  | undefined
                                                bold: boolean | null | undefined
                                                hyperlinkUrl:
                                                  | string
                                                  | null
                                                  | undefined
                                                strikeout:
                                                  | boolean
                                                  | null
                                                  | undefined
                                                inlineCode:
                                                  | boolean
                                                  | null
                                                  | undefined
                                              }
                                            | null
                                            | undefined
                                          >
                                        | null
                                        | undefined
                                    }
                                  | {
                                      __typename?: 'Subtitle'
                                      text: string | null | undefined
                                    }
                                  | {
                                      __typename?: 'Video'
                                      platform: VideoPlatform | null | undefined
                                      url: string | null | undefined
                                      caption: string | null | undefined
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined
                          }
                        | {
                            __typename?: 'Paragraph'
                            chunks:
                              | Array<
                                  | {
                                      __typename?: 'TextChunk'
                                      text: string | null | undefined
                                      highlight: boolean | null | undefined
                                      bold: boolean | null | undefined
                                      hyperlinkUrl: string | null | undefined
                                      strikeout: boolean | null | undefined
                                      inlineCode: boolean | null | undefined
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined
                          }
                        | {
                            __typename?: 'Subtitle'
                            text: string | null | undefined
                          }
                        | {
                            __typename?: 'Video'
                            platform: VideoPlatform | null | undefined
                            url: string | null | undefined
                            caption: string | null | undefined
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
}

export type ActionComponentFragment = {
  __typename?: 'Action'
  instruction:
    | {
        __typename?: 'Paragraph'
        chunks:
          | Array<
              | {
                  __typename?: 'TextChunk'
                  text: string | null | undefined
                  highlight: boolean | null | undefined
                  bold: boolean | null | undefined
                  hyperlinkUrl: string | null | undefined
                  strikeout: boolean | null | undefined
                  inlineCode: boolean | null | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
  details:
    | Array<
        | {
            __typename?: 'CarouselImage'
            images:
              | Array<
                  | {
                      __typename?: 'Image'
                      caption: string | null | undefined
                      url: string | null | undefined
                      alt: string | null | undefined
                      width: number | null | undefined
                      height: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Command'; text: string | null | undefined }
        | { __typename?: 'CommandOutput'; text: string | null | undefined }
        | {
            __typename?: 'Paragraph'
            chunks:
              | Array<
                  | {
                      __typename?: 'TextChunk'
                      text: string | null | undefined
                      highlight: boolean | null | undefined
                      bold: boolean | null | undefined
                      hyperlinkUrl: string | null | undefined
                      strikeout: boolean | null | undefined
                      inlineCode: boolean | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Subtitle'; text: string | null | undefined }
        | {
            __typename?: 'Video'
            platform: VideoPlatform | null | undefined
            url: string | null | undefined
            caption: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
  results:
    | Array<
        | {
            __typename?: 'CarouselImage'
            images:
              | Array<
                  | {
                      __typename?: 'Image'
                      caption: string | null | undefined
                      url: string | null | undefined
                      alt: string | null | undefined
                      width: number | null | undefined
                      height: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Command'; text: string | null | undefined }
        | { __typename?: 'CommandOutput'; text: string | null | undefined }
        | {
            __typename?: 'Paragraph'
            chunks:
              | Array<
                  | {
                      __typename?: 'TextChunk'
                      text: string | null | undefined
                      highlight: boolean | null | undefined
                      bold: boolean | null | undefined
                      hyperlinkUrl: string | null | undefined
                      strikeout: boolean | null | undefined
                      inlineCode: boolean | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Subtitle'; text: string | null | undefined }
        | {
            __typename?: 'Video'
            platform: VideoPlatform | null | undefined
            url: string | null | undefined
            caption: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type ActionDetailsComponentFragment = {
  __typename?: 'Action'
  details:
    | Array<
        | {
            __typename?: 'CarouselImage'
            images:
              | Array<
                  | {
                      __typename?: 'Image'
                      caption: string | null | undefined
                      url: string | null | undefined
                      alt: string | null | undefined
                      width: number | null | undefined
                      height: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Command'; text: string | null | undefined }
        | { __typename?: 'CommandOutput'; text: string | null | undefined }
        | {
            __typename?: 'Paragraph'
            chunks:
              | Array<
                  | {
                      __typename?: 'TextChunk'
                      text: string | null | undefined
                      highlight: boolean | null | undefined
                      bold: boolean | null | undefined
                      hyperlinkUrl: string | null | undefined
                      strikeout: boolean | null | undefined
                      inlineCode: boolean | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Subtitle'; text: string | null | undefined }
        | {
            __typename?: 'Video'
            platform: VideoPlatform | null | undefined
            url: string | null | undefined
            caption: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type ActionInstructionComponentFragment = {
  __typename?: 'Action'
  instruction:
    | {
        __typename?: 'Paragraph'
        chunks:
          | Array<
              | {
                  __typename?: 'TextChunk'
                  text: string | null | undefined
                  highlight: boolean | null | undefined
                  bold: boolean | null | undefined
                  hyperlinkUrl: string | null | undefined
                  strikeout: boolean | null | undefined
                  inlineCode: boolean | null | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
}

export type ActionResultComponentFragment = {
  __typename?: 'Action'
  results:
    | Array<
        | {
            __typename?: 'CarouselImage'
            images:
              | Array<
                  | {
                      __typename?: 'Image'
                      caption: string | null | undefined
                      url: string | null | undefined
                      alt: string | null | undefined
                      width: number | null | undefined
                      height: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Command'; text: string | null | undefined }
        | { __typename?: 'CommandOutput'; text: string | null | undefined }
        | {
            __typename?: 'Paragraph'
            chunks:
              | Array<
                  | {
                      __typename?: 'TextChunk'
                      text: string | null | undefined
                      highlight: boolean | null | undefined
                      bold: boolean | null | undefined
                      hyperlinkUrl: string | null | undefined
                      strikeout: boolean | null | undefined
                      inlineCode: boolean | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Subtitle'; text: string | null | undefined }
        | {
            __typename?: 'Video'
            platform: VideoPlatform | null | undefined
            url: string | null | undefined
            caption: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type CarouselComponentFragment = {
  __typename?: 'CarouselImage'
  images:
    | Array<
        | {
            __typename?: 'Image'
            caption: string | null | undefined
            url: string | null | undefined
            alt: string | null | undefined
            width: number | null | undefined
            height: number | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type CarouselDescriptionComponentFragment = {
  __typename?: 'CarouselImage'
  images:
    | Array<
        | {
            __typename?: 'Image'
            caption: string | null | undefined
            url: string | null | undefined
            alt: string | null | undefined
            width: number | null | undefined
            height: number | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type CarouselImageItemComponentFragment = {
  __typename?: 'Image'
  url: string | null | undefined
  alt: string | null | undefined
  width: number | null | undefined
  height: number | null | undefined
}

export type CarouselImageScrollComponentFragment = {
  __typename?: 'CarouselImage'
  images:
    | Array<
        | {
            __typename?: 'Image'
            url: string | null | undefined
            alt: string | null | undefined
            width: number | null | undefined
            height: number | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type CommandComponentFragment = {
  __typename?: 'Command'
  text: string | null | undefined
}

export type CommandComponent2Fragment = {
  __typename?: 'Command'
  text: string | null | undefined
}

export type CommandOutputComponentFragment = {
  __typename?: 'CommandOutput'
  text: string | null | undefined
}

type PageElementComponent_Action_Fragment = {
  __typename?: 'Action'
  instruction:
    | {
        __typename?: 'Paragraph'
        chunks:
          | Array<
              | {
                  __typename?: 'TextChunk'
                  text: string | null | undefined
                  highlight: boolean | null | undefined
                  bold: boolean | null | undefined
                  hyperlinkUrl: string | null | undefined
                  strikeout: boolean | null | undefined
                  inlineCode: boolean | null | undefined
                }
              | null
              | undefined
            >
          | null
          | undefined
      }
    | null
    | undefined
  details:
    | Array<
        | {
            __typename?: 'CarouselImage'
            images:
              | Array<
                  | {
                      __typename?: 'Image'
                      caption: string | null | undefined
                      url: string | null | undefined
                      alt: string | null | undefined
                      width: number | null | undefined
                      height: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Command'; text: string | null | undefined }
        | { __typename?: 'CommandOutput'; text: string | null | undefined }
        | {
            __typename?: 'Paragraph'
            chunks:
              | Array<
                  | {
                      __typename?: 'TextChunk'
                      text: string | null | undefined
                      highlight: boolean | null | undefined
                      bold: boolean | null | undefined
                      hyperlinkUrl: string | null | undefined
                      strikeout: boolean | null | undefined
                      inlineCode: boolean | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Subtitle'; text: string | null | undefined }
        | {
            __typename?: 'Video'
            platform: VideoPlatform | null | undefined
            url: string | null | undefined
            caption: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
  results:
    | Array<
        | {
            __typename?: 'CarouselImage'
            images:
              | Array<
                  | {
                      __typename?: 'Image'
                      caption: string | null | undefined
                      url: string | null | undefined
                      alt: string | null | undefined
                      width: number | null | undefined
                      height: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Command'; text: string | null | undefined }
        | { __typename?: 'CommandOutput'; text: string | null | undefined }
        | {
            __typename?: 'Paragraph'
            chunks:
              | Array<
                  | {
                      __typename?: 'TextChunk'
                      text: string | null | undefined
                      highlight: boolean | null | undefined
                      bold: boolean | null | undefined
                      hyperlinkUrl: string | null | undefined
                      strikeout: boolean | null | undefined
                      inlineCode: boolean | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Subtitle'; text: string | null | undefined }
        | {
            __typename?: 'Video'
            platform: VideoPlatform | null | undefined
            url: string | null | undefined
            caption: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

type PageElementComponent_CarouselImage_Fragment = {
  __typename?: 'CarouselImage'
  images:
    | Array<
        | {
            __typename?: 'Image'
            caption: string | null | undefined
            url: string | null | undefined
            alt: string | null | undefined
            width: number | null | undefined
            height: number | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

type PageElementComponent_Command_Fragment = {
  __typename?: 'Command'
  text: string | null | undefined
}

type PageElementComponent_CommandOutput_Fragment = {
  __typename?: 'CommandOutput'
  text: string | null | undefined
}

type PageElementComponent_Foldable_Fragment = {
  __typename?: 'Foldable'
  shortDescription: string | null | undefined
  elements:
    | Array<
        | {
            __typename?: 'CarouselImage'
            images:
              | Array<
                  | {
                      __typename?: 'Image'
                      caption: string | null | undefined
                      url: string | null | undefined
                      alt: string | null | undefined
                      width: number | null | undefined
                      height: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Command'; text: string | null | undefined }
        | { __typename?: 'CommandOutput'; text: string | null | undefined }
        | {
            __typename?: 'Paragraph'
            chunks:
              | Array<
                  | {
                      __typename?: 'TextChunk'
                      text: string | null | undefined
                      highlight: boolean | null | undefined
                      bold: boolean | null | undefined
                      hyperlinkUrl: string | null | undefined
                      strikeout: boolean | null | undefined
                      inlineCode: boolean | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Subtitle'; text: string | null | undefined }
        | {
            __typename?: 'Video'
            platform: VideoPlatform | null | undefined
            url: string | null | undefined
            caption: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

type PageElementComponent_Paragraph_Fragment = {
  __typename?: 'Paragraph'
  chunks:
    | Array<
        | {
            __typename?: 'TextChunk'
            text: string | null | undefined
            highlight: boolean | null | undefined
            bold: boolean | null | undefined
            hyperlinkUrl: string | null | undefined
            strikeout: boolean | null | undefined
            inlineCode: boolean | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

type PageElementComponent_Subtitle_Fragment = {
  __typename?: 'Subtitle'
  text: string | null | undefined
}

type PageElementComponent_Video_Fragment = {
  __typename?: 'Video'
  platform: VideoPlatform | null | undefined
  url: string | null | undefined
  caption: string | null | undefined
}

export type PageElementComponentFragment =
  | PageElementComponent_Action_Fragment
  | PageElementComponent_CarouselImage_Fragment
  | PageElementComponent_Command_Fragment
  | PageElementComponent_CommandOutput_Fragment
  | PageElementComponent_Foldable_Fragment
  | PageElementComponent_Paragraph_Fragment
  | PageElementComponent_Subtitle_Fragment
  | PageElementComponent_Video_Fragment

type PlainElementComponent_CarouselImage_Fragment = {
  __typename?: 'CarouselImage'
  images:
    | Array<
        | {
            __typename?: 'Image'
            caption: string | null | undefined
            url: string | null | undefined
            alt: string | null | undefined
            width: number | null | undefined
            height: number | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

type PlainElementComponent_Command_Fragment = {
  __typename?: 'Command'
  text: string | null | undefined
}

type PlainElementComponent_CommandOutput_Fragment = {
  __typename?: 'CommandOutput'
  text: string | null | undefined
}

type PlainElementComponent_Paragraph_Fragment = {
  __typename?: 'Paragraph'
  chunks:
    | Array<
        | {
            __typename?: 'TextChunk'
            text: string | null | undefined
            highlight: boolean | null | undefined
            bold: boolean | null | undefined
            hyperlinkUrl: string | null | undefined
            strikeout: boolean | null | undefined
            inlineCode: boolean | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

type PlainElementComponent_Subtitle_Fragment = {
  __typename?: 'Subtitle'
  text: string | null | undefined
}

type PlainElementComponent_Video_Fragment = {
  __typename?: 'Video'
  platform: VideoPlatform | null | undefined
  url: string | null | undefined
  caption: string | null | undefined
}

export type PlainElementComponentFragment =
  | PlainElementComponent_CarouselImage_Fragment
  | PlainElementComponent_Command_Fragment
  | PlainElementComponent_CommandOutput_Fragment
  | PlainElementComponent_Paragraph_Fragment
  | PlainElementComponent_Subtitle_Fragment
  | PlainElementComponent_Video_Fragment

export type FileComponentFragment = {
  __typename?: 'File'
  fileName: string | null | undefined
  content: string | null | undefined
}

export type FileMultipleComponentFragment = {
  __typename?: 'FileMultiple'
  files:
    | Array<
        | {
            __typename?: 'File'
            fileName: string | null | undefined
            content: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type FileMultipleNameTabFragment = {
  __typename?: 'FileMultiple'
  files:
    | Array<
        | { __typename?: 'File'; fileName: string | null | undefined }
        | null
        | undefined
      >
    | null
    | undefined
}

export type FileTreeComponentFragment = {
  __typename?: 'FileTree'
  treeNodes:
    | Array<
        | {
            __typename?: 'FileTreeNode'
            nodeType: FileTreeNodeType | null | undefined
            name: string | null | undefined
            depth: number | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type FileTreeNodeComponentFragment = {
  __typename?: 'FileTreeNode'
  nodeType: FileTreeNodeType | null | undefined
  name: string | null | undefined
  depth: number | null | undefined
}

export type FoldableComponentFragment = {
  __typename?: 'Foldable'
  shortDescription: string | null | undefined
  elements:
    | Array<
        | {
            __typename?: 'CarouselImage'
            images:
              | Array<
                  | {
                      __typename?: 'Image'
                      caption: string | null | undefined
                      url: string | null | undefined
                      alt: string | null | undefined
                      width: number | null | undefined
                      height: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Command'; text: string | null | undefined }
        | { __typename?: 'CommandOutput'; text: string | null | undefined }
        | {
            __typename?: 'Paragraph'
            chunks:
              | Array<
                  | {
                      __typename?: 'TextChunk'
                      text: string | null | undefined
                      highlight: boolean | null | undefined
                      bold: boolean | null | undefined
                      hyperlinkUrl: string | null | undefined
                      strikeout: boolean | null | undefined
                      inlineCode: boolean | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Subtitle'; text: string | null | undefined }
        | {
            __typename?: 'Video'
            platform: VideoPlatform | null | undefined
            url: string | null | undefined
            caption: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type HeaderContainerFragment = {
  __typename?: 'Tutorial'
  title: string | null | undefined
}

export type ParagraphComponentFragment = {
  __typename?: 'Paragraph'
  chunks:
    | Array<
        | {
            __typename?: 'TextChunk'
            text: string | null | undefined
            highlight: boolean | null | undefined
            bold: boolean | null | undefined
            hyperlinkUrl: string | null | undefined
            strikeout: boolean | null | undefined
            inlineCode: boolean | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type TextChunkComponentFragment = {
  __typename?: 'TextChunk'
  text: string | null | undefined
  highlight: boolean | null | undefined
  bold: boolean | null | undefined
  hyperlinkUrl: string | null | undefined
  strikeout: boolean | null | undefined
  inlineCode: boolean | null | undefined
}

export type SubtitleComponentFragment = {
  __typename?: 'Subtitle'
  text: string | null | undefined
}

export type TutorialPageFragment = {
  __typename?: 'Tutorial'
  id: string | null | undefined
  title: string | null | undefined
  author:
    | { __typename?: 'Author'; id: string | null | undefined }
    | null
    | undefined
  pages:
    | Array<
        | {
            __typename?: 'Page'
            id: string | null | undefined
            pageNum: string | null | undefined
            nextPageNum: string | null | undefined
            prevPageNum: string | null | undefined
            title: string | null | undefined
            pageElements:
              | Array<
                  | {
                      __typename?: 'Action'
                      instruction:
                        | {
                            __typename?: 'Paragraph'
                            chunks:
                              | Array<
                                  | {
                                      __typename?: 'TextChunk'
                                      text: string | null | undefined
                                      highlight: boolean | null | undefined
                                      bold: boolean | null | undefined
                                      hyperlinkUrl: string | null | undefined
                                      strikeout: boolean | null | undefined
                                      inlineCode: boolean | null | undefined
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined
                          }
                        | null
                        | undefined
                      details:
                        | Array<
                            | {
                                __typename?: 'CarouselImage'
                                images:
                                  | Array<
                                      | {
                                          __typename?: 'Image'
                                          caption: string | null | undefined
                                          url: string | null | undefined
                                          alt: string | null | undefined
                                          width: number | null | undefined
                                          height: number | null | undefined
                                        }
                                      | null
                                      | undefined
                                    >
                                  | null
                                  | undefined
                              }
                            | {
                                __typename?: 'Command'
                                text: string | null | undefined
                              }
                            | {
                                __typename?: 'CommandOutput'
                                text: string | null | undefined
                              }
                            | {
                                __typename?: 'Paragraph'
                                chunks:
                                  | Array<
                                      | {
                                          __typename?: 'TextChunk'
                                          text: string | null | undefined
                                          highlight: boolean | null | undefined
                                          bold: boolean | null | undefined
                                          hyperlinkUrl:
                                            | string
                                            | null
                                            | undefined
                                          strikeout: boolean | null | undefined
                                          inlineCode: boolean | null | undefined
                                        }
                                      | null
                                      | undefined
                                    >
                                  | null
                                  | undefined
                              }
                            | {
                                __typename?: 'Subtitle'
                                text: string | null | undefined
                              }
                            | {
                                __typename?: 'Video'
                                platform: VideoPlatform | null | undefined
                                url: string | null | undefined
                                caption: string | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                      results:
                        | Array<
                            | {
                                __typename?: 'CarouselImage'
                                images:
                                  | Array<
                                      | {
                                          __typename?: 'Image'
                                          caption: string | null | undefined
                                          url: string | null | undefined
                                          alt: string | null | undefined
                                          width: number | null | undefined
                                          height: number | null | undefined
                                        }
                                      | null
                                      | undefined
                                    >
                                  | null
                                  | undefined
                              }
                            | {
                                __typename?: 'Command'
                                text: string | null | undefined
                              }
                            | {
                                __typename?: 'CommandOutput'
                                text: string | null | undefined
                              }
                            | {
                                __typename?: 'Paragraph'
                                chunks:
                                  | Array<
                                      | {
                                          __typename?: 'TextChunk'
                                          text: string | null | undefined
                                          highlight: boolean | null | undefined
                                          bold: boolean | null | undefined
                                          hyperlinkUrl:
                                            | string
                                            | null
                                            | undefined
                                          strikeout: boolean | null | undefined
                                          inlineCode: boolean | null | undefined
                                        }
                                      | null
                                      | undefined
                                    >
                                  | null
                                  | undefined
                              }
                            | {
                                __typename?: 'Subtitle'
                                text: string | null | undefined
                              }
                            | {
                                __typename?: 'Video'
                                platform: VideoPlatform | null | undefined
                                url: string | null | undefined
                                caption: string | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | {
                      __typename?: 'CarouselImage'
                      images:
                        | Array<
                            | {
                                __typename?: 'Image'
                                caption: string | null | undefined
                                url: string | null | undefined
                                alt: string | null | undefined
                                width: number | null | undefined
                                height: number | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | { __typename?: 'Command'; text: string | null | undefined }
                  | {
                      __typename?: 'CommandOutput'
                      text: string | null | undefined
                    }
                  | {
                      __typename?: 'Foldable'
                      shortDescription: string | null | undefined
                      elements:
                        | Array<
                            | {
                                __typename?: 'CarouselImage'
                                images:
                                  | Array<
                                      | {
                                          __typename?: 'Image'
                                          caption: string | null | undefined
                                          url: string | null | undefined
                                          alt: string | null | undefined
                                          width: number | null | undefined
                                          height: number | null | undefined
                                        }
                                      | null
                                      | undefined
                                    >
                                  | null
                                  | undefined
                              }
                            | {
                                __typename?: 'Command'
                                text: string | null | undefined
                              }
                            | {
                                __typename?: 'CommandOutput'
                                text: string | null | undefined
                              }
                            | {
                                __typename?: 'Paragraph'
                                chunks:
                                  | Array<
                                      | {
                                          __typename?: 'TextChunk'
                                          text: string | null | undefined
                                          highlight: boolean | null | undefined
                                          bold: boolean | null | undefined
                                          hyperlinkUrl:
                                            | string
                                            | null
                                            | undefined
                                          strikeout: boolean | null | undefined
                                          inlineCode: boolean | null | undefined
                                        }
                                      | null
                                      | undefined
                                    >
                                  | null
                                  | undefined
                              }
                            | {
                                __typename?: 'Subtitle'
                                text: string | null | undefined
                              }
                            | {
                                __typename?: 'Video'
                                platform: VideoPlatform | null | undefined
                                url: string | null | undefined
                                caption: string | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | {
                      __typename?: 'Paragraph'
                      chunks:
                        | Array<
                            | {
                                __typename?: 'TextChunk'
                                text: string | null | undefined
                                highlight: boolean | null | undefined
                                bold: boolean | null | undefined
                                hyperlinkUrl: string | null | undefined
                                strikeout: boolean | null | undefined
                                inlineCode: boolean | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | { __typename?: 'Subtitle'; text: string | null | undefined }
                  | {
                      __typename?: 'Video'
                      platform: VideoPlatform | null | undefined
                      url: string | null | undefined
                      caption: string | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type TutorialPageMainContainerFragment = {
  __typename?: 'Page'
  id: string | null | undefined
  pageNum: string | null | undefined
  nextPageNum: string | null | undefined
  prevPageNum: string | null | undefined
  title: string | null | undefined
  pageElements:
    | Array<
        | {
            __typename?: 'Action'
            instruction:
              | {
                  __typename?: 'Paragraph'
                  chunks:
                    | Array<
                        | {
                            __typename?: 'TextChunk'
                            text: string | null | undefined
                            highlight: boolean | null | undefined
                            bold: boolean | null | undefined
                            hyperlinkUrl: string | null | undefined
                            strikeout: boolean | null | undefined
                            inlineCode: boolean | null | undefined
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                }
              | null
              | undefined
            details:
              | Array<
                  | {
                      __typename?: 'CarouselImage'
                      images:
                        | Array<
                            | {
                                __typename?: 'Image'
                                caption: string | null | undefined
                                url: string | null | undefined
                                alt: string | null | undefined
                                width: number | null | undefined
                                height: number | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | { __typename?: 'Command'; text: string | null | undefined }
                  | {
                      __typename?: 'CommandOutput'
                      text: string | null | undefined
                    }
                  | {
                      __typename?: 'Paragraph'
                      chunks:
                        | Array<
                            | {
                                __typename?: 'TextChunk'
                                text: string | null | undefined
                                highlight: boolean | null | undefined
                                bold: boolean | null | undefined
                                hyperlinkUrl: string | null | undefined
                                strikeout: boolean | null | undefined
                                inlineCode: boolean | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | { __typename?: 'Subtitle'; text: string | null | undefined }
                  | {
                      __typename?: 'Video'
                      platform: VideoPlatform | null | undefined
                      url: string | null | undefined
                      caption: string | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
            results:
              | Array<
                  | {
                      __typename?: 'CarouselImage'
                      images:
                        | Array<
                            | {
                                __typename?: 'Image'
                                caption: string | null | undefined
                                url: string | null | undefined
                                alt: string | null | undefined
                                width: number | null | undefined
                                height: number | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | { __typename?: 'Command'; text: string | null | undefined }
                  | {
                      __typename?: 'CommandOutput'
                      text: string | null | undefined
                    }
                  | {
                      __typename?: 'Paragraph'
                      chunks:
                        | Array<
                            | {
                                __typename?: 'TextChunk'
                                text: string | null | undefined
                                highlight: boolean | null | undefined
                                bold: boolean | null | undefined
                                hyperlinkUrl: string | null | undefined
                                strikeout: boolean | null | undefined
                                inlineCode: boolean | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | { __typename?: 'Subtitle'; text: string | null | undefined }
                  | {
                      __typename?: 'Video'
                      platform: VideoPlatform | null | undefined
                      url: string | null | undefined
                      caption: string | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | {
            __typename?: 'CarouselImage'
            images:
              | Array<
                  | {
                      __typename?: 'Image'
                      caption: string | null | undefined
                      url: string | null | undefined
                      alt: string | null | undefined
                      width: number | null | undefined
                      height: number | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Command'; text: string | null | undefined }
        | { __typename?: 'CommandOutput'; text: string | null | undefined }
        | {
            __typename?: 'Foldable'
            shortDescription: string | null | undefined
            elements:
              | Array<
                  | {
                      __typename?: 'CarouselImage'
                      images:
                        | Array<
                            | {
                                __typename?: 'Image'
                                caption: string | null | undefined
                                url: string | null | undefined
                                alt: string | null | undefined
                                width: number | null | undefined
                                height: number | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | { __typename?: 'Command'; text: string | null | undefined }
                  | {
                      __typename?: 'CommandOutput'
                      text: string | null | undefined
                    }
                  | {
                      __typename?: 'Paragraph'
                      chunks:
                        | Array<
                            | {
                                __typename?: 'TextChunk'
                                text: string | null | undefined
                                highlight: boolean | null | undefined
                                bold: boolean | null | undefined
                                hyperlinkUrl: string | null | undefined
                                strikeout: boolean | null | undefined
                                inlineCode: boolean | null | undefined
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    }
                  | { __typename?: 'Subtitle'; text: string | null | undefined }
                  | {
                      __typename?: 'Video'
                      platform: VideoPlatform | null | undefined
                      url: string | null | undefined
                      caption: string | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | {
            __typename?: 'Paragraph'
            chunks:
              | Array<
                  | {
                      __typename?: 'TextChunk'
                      text: string | null | undefined
                      highlight: boolean | null | undefined
                      bold: boolean | null | undefined
                      hyperlinkUrl: string | null | undefined
                      strikeout: boolean | null | undefined
                      inlineCode: boolean | null | undefined
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | { __typename?: 'Subtitle'; text: string | null | undefined }
        | {
            __typename?: 'Video'
            platform: VideoPlatform | null | undefined
            url: string | null | undefined
            caption: string | null | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type TutorialPageTransitionComponentFragment = {
  __typename?: 'Page'
  nextPageNum: string | null | undefined
  prevPageNum: string | null | undefined
}

export type VideoComponentFragment = {
  __typename?: 'Video'
  platform: VideoPlatform | null | undefined
  url: string | null | undefined
  caption: string | null | undefined
}

export const CommandComponent2FragmentDoc = gql`
  fragment CommandComponent2 on Command {
    text
  }
`
export const TextChunkComponentFragmentDoc = gql`
  fragment TextChunkComponent on TextChunk {
    text
    highlight
    bold
    hyperlinkUrl
    strikeout
    inlineCode
  }
`
export const ParagraphComponentFragmentDoc = gql`
  fragment ParagraphComponent on Paragraph {
    chunks {
      ...TextChunkComponent
    }
  }
  ${TextChunkComponentFragmentDoc}
`
export const CommandComponentFragmentDoc = gql`
  fragment CommandComponent on Command {
    text
  }
`
export const CommandOutputComponentFragmentDoc = gql`
  fragment CommandOutputComponent on CommandOutput {
    text
  }
`
export const VideoComponentFragmentDoc = gql`
  fragment VideoComponent on Video {
    platform
    url
    caption
  }
`
export const CarouselImageItemComponentFragmentDoc = gql`
  fragment CarouselImageItemComponent on Image {
    url
    alt
    width
    height
  }
`
export const CarouselImageScrollComponentFragmentDoc = gql`
  fragment CarouselImageScrollComponent on CarouselImage {
    images {
      ...CarouselImageItemComponent
    }
  }
  ${CarouselImageItemComponentFragmentDoc}
`
export const CarouselDescriptionComponentFragmentDoc = gql`
  fragment CarouselDescriptionComponent on CarouselImage {
    images {
      caption
      ...CarouselImageItemComponent
    }
  }
  ${CarouselImageItemComponentFragmentDoc}
`
export const CarouselComponentFragmentDoc = gql`
  fragment CarouselComponent on CarouselImage {
    ...CarouselImageScrollComponent
    ...CarouselDescriptionComponent
  }
  ${CarouselImageScrollComponentFragmentDoc}
  ${CarouselDescriptionComponentFragmentDoc}
`
export const ActionInstructionComponentFragmentDoc = gql`
  fragment ActionInstructionComponent on Action {
    instruction {
      ...ParagraphComponent
    }
  }
  ${ParagraphComponentFragmentDoc}
`
export const SubtitleComponentFragmentDoc = gql`
  fragment SubtitleComponent on Subtitle {
    text
  }
`
export const ActionDetailsComponentFragmentDoc = gql`
  fragment ActionDetailsComponent on Action {
    details {
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on Command {
        ...CommandComponent
      }
      ... on CommandOutput {
        ...CommandOutputComponent
      }
      ... on Video {
        ...VideoComponent
      }
      ... on CarouselImage {
        ...CarouselComponent
      }
      ... on Subtitle {
        ...SubtitleComponent
      }
    }
  }
  ${ParagraphComponentFragmentDoc}
  ${CommandComponentFragmentDoc}
  ${CommandOutputComponentFragmentDoc}
  ${VideoComponentFragmentDoc}
  ${CarouselComponentFragmentDoc}
  ${SubtitleComponentFragmentDoc}
`
export const ActionResultComponentFragmentDoc = gql`
  fragment ActionResultComponent on Action {
    results {
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on Command {
        ...CommandComponent
      }
      ... on CommandOutput {
        ...CommandOutputComponent
      }
      ... on Video {
        ...VideoComponent
      }
      ... on CarouselImage {
        ...CarouselComponent
      }
      ... on Subtitle {
        ...SubtitleComponent
      }
    }
  }
  ${ParagraphComponentFragmentDoc}
  ${CommandComponentFragmentDoc}
  ${CommandOutputComponentFragmentDoc}
  ${VideoComponentFragmentDoc}
  ${CarouselComponentFragmentDoc}
  ${SubtitleComponentFragmentDoc}
`
export const ActionComponentFragmentDoc = gql`
  fragment ActionComponent on Action {
    ...ActionInstructionComponent
    ...ActionDetailsComponent
    ...ActionResultComponent
  }
  ${ActionInstructionComponentFragmentDoc}
  ${ActionDetailsComponentFragmentDoc}
  ${ActionResultComponentFragmentDoc}
`
export const FoldableComponentFragmentDoc = gql`
  fragment FoldableComponent on Foldable {
    shortDescription
    elements {
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on Command {
        ...CommandComponent
      }
      ... on CommandOutput {
        ...CommandOutputComponent
      }
      ... on Video {
        ...VideoComponent
      }
      ... on CarouselImage {
        ...CarouselComponent
      }
      ... on Subtitle {
        ...SubtitleComponent
      }
    }
  }
  ${ParagraphComponentFragmentDoc}
  ${CommandComponentFragmentDoc}
  ${CommandOutputComponentFragmentDoc}
  ${VideoComponentFragmentDoc}
  ${CarouselComponentFragmentDoc}
  ${SubtitleComponentFragmentDoc}
`
export const PageElementComponentFragmentDoc = gql`
  fragment PageElementComponent on PageElement {
    ... on Paragraph {
      ...ParagraphComponent
    }
    ... on Command {
      ...CommandComponent
    }
    ... on CommandOutput {
      ...CommandOutputComponent
    }
    ... on Video {
      ...VideoComponent
    }
    ... on CarouselImage {
      ...CarouselComponent
    }
    ... on Action {
      ...ActionComponent
    }
    ... on Subtitle {
      ...SubtitleComponent
    }
    ... on Foldable {
      ...FoldableComponent
    }
  }
  ${ParagraphComponentFragmentDoc}
  ${CommandComponentFragmentDoc}
  ${CommandOutputComponentFragmentDoc}
  ${VideoComponentFragmentDoc}
  ${CarouselComponentFragmentDoc}
  ${ActionComponentFragmentDoc}
  ${SubtitleComponentFragmentDoc}
  ${FoldableComponentFragmentDoc}
`
export const PlainElementComponentFragmentDoc = gql`
  fragment PlainElementComponent on PlainElement {
    ... on Paragraph {
      ...ParagraphComponent
    }
    ... on Command {
      ...CommandComponent
    }
    ... on CommandOutput {
      ...CommandOutputComponent
    }
    ... on Video {
      ...VideoComponent
    }
    ... on CarouselImage {
      ...CarouselComponent
    }
    ... on Subtitle {
      ...SubtitleComponent
    }
  }
  ${ParagraphComponentFragmentDoc}
  ${CommandComponentFragmentDoc}
  ${CommandOutputComponentFragmentDoc}
  ${VideoComponentFragmentDoc}
  ${CarouselComponentFragmentDoc}
  ${SubtitleComponentFragmentDoc}
`
export const FileComponentFragmentDoc = gql`
  fragment FileComponent on File {
    fileName
    content
  }
`
export const FileMultipleNameTabFragmentDoc = gql`
  fragment FileMultipleNameTab on FileMultiple {
    files {
      fileName
    }
  }
`
export const FileMultipleComponentFragmentDoc = gql`
  fragment FileMultipleComponent on FileMultiple {
    files {
      ...FileComponent
    }
    ...FileMultipleNameTab
  }
  ${FileComponentFragmentDoc}
  ${FileMultipleNameTabFragmentDoc}
`
export const FileTreeNodeComponentFragmentDoc = gql`
  fragment FileTreeNodeComponent on FileTreeNode {
    nodeType
    name
    depth
  }
`
export const FileTreeComponentFragmentDoc = gql`
  fragment FileTreeComponent on FileTree {
    treeNodes {
      ...FileTreeNodeComponent
    }
  }
  ${FileTreeNodeComponentFragmentDoc}
`
export const HeaderContainerFragmentDoc = gql`
  fragment HeaderContainer on Tutorial {
    title
  }
`
export const TutorialPageMainContainerFragmentDoc = gql`
  fragment TutorialPageMainContainer on Page {
    id
    pageNum
    nextPageNum
    prevPageNum
    title
    pageElements {
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on Command {
        ...CommandComponent
      }
      ... on CommandOutput {
        ...CommandOutputComponent
      }
      ... on Video {
        ...VideoComponent
      }
      ... on CarouselImage {
        ...CarouselComponent
      }
      ... on Action {
        ...ActionComponent
      }
      ... on Subtitle {
        ...SubtitleComponent
      }
      ... on Foldable {
        ...FoldableComponent
      }
    }
  }
  ${ParagraphComponentFragmentDoc}
  ${CommandComponentFragmentDoc}
  ${CommandOutputComponentFragmentDoc}
  ${VideoComponentFragmentDoc}
  ${CarouselComponentFragmentDoc}
  ${ActionComponentFragmentDoc}
  ${SubtitleComponentFragmentDoc}
  ${FoldableComponentFragmentDoc}
`
export const TutorialPageFragmentDoc = gql`
  fragment TutorialPage on Tutorial {
    ...HeaderContainer
    id
    author {
      id
    }
    title
    pages {
      ...TutorialPageMainContainer
    }
  }
  ${HeaderContainerFragmentDoc}
  ${TutorialPageMainContainerFragmentDoc}
`
export const TutorialPageTransitionComponentFragmentDoc = gql`
  fragment TutorialPageTransitionComponent on Page {
    nextPageNum
    prevPageNum
  }
`
export const MainDocument = gql`
  query Main {
    tutorial {
      ...TutorialPage
    }
  }
  ${TutorialPageFragmentDoc}
`

/**
 * __useMainQuery__
 *
 * To run a query within a React component, call `useMainQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainQuery({
 *   variables: {
 *   },
 * });
 */
export function useMainQuery(
  baseOptions?: Apollo.QueryHookOptions<MainQuery, MainQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MainQuery, MainQueryVariables>(MainDocument, options)
}
export function useMainLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MainQuery, MainQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MainQuery, MainQueryVariables>(
    MainDocument,
    options
  )
}
export type MainQueryHookResult = ReturnType<typeof useMainQuery>
export type MainLazyQueryHookResult = ReturnType<typeof useMainLazyQuery>
export type MainQueryResult = Apollo.QueryResult<MainQuery, MainQueryVariables>
export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Action: ResolverTypeWrapper<
    Omit<Action, 'details' | 'results'> & {
      details: Maybe<Array<Maybe<ResolversTypes['PlainElement']>>>
      results: Maybe<Array<Maybe<ResolversTypes['PlainElement']>>>
    }
  >
  Author: ResolverTypeWrapper<Author>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  CarouselImage: ResolverTypeWrapper<CarouselImage>
  Command: ResolverTypeWrapper<Command>
  CommandOutput: ResolverTypeWrapper<CommandOutput>
  DecorateTextChunksInput: ResolverTypeWrapper<DecorateTextChunksInput>
  DirectoryStructure: ResolverTypeWrapper<DirectoryStructure>
  File: ResolverTypeWrapper<File>
  FileMultiple: ResolverTypeWrapper<FileMultiple>
  FileTree: ResolverTypeWrapper<FileTree>
  FileTreeNode: ResolverTypeWrapper<FileTreeNode>
  FileTreeNodeType: FileTreeNodeType
  Foldable: ResolverTypeWrapper<
    Omit<Foldable, 'elements'> & {
      elements: Maybe<Array<Maybe<ResolversTypes['PlainElement']>>>
    }
  >
  ID: ResolverTypeWrapper<Scalars['ID']>
  Image: ResolverTypeWrapper<Image>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Note: ResolverTypeWrapper<Note>
  Page: ResolverTypeWrapper<
    Omit<Page, 'pageElements'> & {
      pageElements: Maybe<Array<Maybe<ResolversTypes['PageElement']>>>
    }
  >
  PageElement:
    | ResolversTypes['Action']
    | ResolversTypes['CarouselImage']
    | ResolversTypes['Command']
    | ResolversTypes['CommandOutput']
    | ResolversTypes['Foldable']
    | ResolversTypes['Paragraph']
    | ResolversTypes['Subtitle']
    | ResolversTypes['Video']
  Paragraph: ResolverTypeWrapper<Paragraph>
  PlainElement:
    | ResolversTypes['CarouselImage']
    | ResolversTypes['Command']
    | ResolversTypes['CommandOutput']
    | ResolversTypes['Paragraph']
    | ResolversTypes['Subtitle']
    | ResolversTypes['Video']
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
  Subtitle: ResolverTypeWrapper<Subtitle>
  TextChunk: ResolverTypeWrapper<TextChunk>
  TextChunkModifyOperation: ResolverTypeWrapper<TextChunkModifyOperation>
  TextChunkOperation:
    | ResolversTypes['TextChunkModifyOperation']
    | ResolversTypes['TextChunkSplitOperation']
  TextChunkSplitOperation: ResolverTypeWrapper<TextChunkSplitOperation>
  TextChunkWithOperation: ResolverTypeWrapper<
    Omit<TextChunkWithOperation, 'operation'> & {
      operation: Maybe<ResolversTypes['TextChunkOperation']>
    }
  >
  Tutorial: ResolverTypeWrapper<Tutorial>
  Video: ResolverTypeWrapper<Video>
  VideoPlatform: VideoPlatform
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Action: Omit<Action, 'details' | 'results'> & {
    details: Maybe<Array<Maybe<ResolversParentTypes['PlainElement']>>>
    results: Maybe<Array<Maybe<ResolversParentTypes['PlainElement']>>>
  }
  Author: Author
  Boolean: Scalars['Boolean']
  CarouselImage: CarouselImage
  Command: Command
  CommandOutput: CommandOutput
  DecorateTextChunksInput: DecorateTextChunksInput
  DirectoryStructure: DirectoryStructure
  File: File
  FileMultiple: FileMultiple
  FileTree: FileTree
  FileTreeNode: FileTreeNode
  Foldable: Omit<Foldable, 'elements'> & {
    elements: Maybe<Array<Maybe<ResolversParentTypes['PlainElement']>>>
  }
  ID: Scalars['ID']
  Image: Image
  Int: Scalars['Int']
  Note: Note
  Page: Omit<Page, 'pageElements'> & {
    pageElements: Maybe<Array<Maybe<ResolversParentTypes['PageElement']>>>
  }
  PageElement:
    | ResolversParentTypes['Action']
    | ResolversParentTypes['CarouselImage']
    | ResolversParentTypes['Command']
    | ResolversParentTypes['CommandOutput']
    | ResolversParentTypes['Foldable']
    | ResolversParentTypes['Paragraph']
    | ResolversParentTypes['Subtitle']
    | ResolversParentTypes['Video']
  Paragraph: Paragraph
  PlainElement:
    | ResolversParentTypes['CarouselImage']
    | ResolversParentTypes['Command']
    | ResolversParentTypes['CommandOutput']
    | ResolversParentTypes['Paragraph']
    | ResolversParentTypes['Subtitle']
    | ResolversParentTypes['Video']
  Query: {}
  String: Scalars['String']
  Subtitle: Subtitle
  TextChunk: TextChunk
  TextChunkModifyOperation: TextChunkModifyOperation
  TextChunkOperation:
    | ResolversParentTypes['TextChunkModifyOperation']
    | ResolversParentTypes['TextChunkSplitOperation']
  TextChunkSplitOperation: TextChunkSplitOperation
  TextChunkWithOperation: Omit<TextChunkWithOperation, 'operation'> & {
    operation: Maybe<ResolversParentTypes['TextChunkOperation']>
  }
  Tutorial: Tutorial
  Video: Video
}>

export type ActionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Action'] = ResolversParentTypes['Action']
> = ResolversObject<{
  details: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PlainElement']>>>,
    ParentType,
    ContextType
  >
  instruction: Resolver<
    Maybe<ResolversTypes['Paragraph']>,
    ParentType,
    ContextType
  >
  results: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PlainElement']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AuthorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']
> = ResolversObject<{
  id: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CarouselImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CarouselImage'] = ResolversParentTypes['CarouselImage']
> = ResolversObject<{
  images: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Image']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CommandResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Command'] = ResolversParentTypes['Command']
> = ResolversObject<{
  text: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CommandOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommandOutput'] = ResolversParentTypes['CommandOutput']
> = ResolversObject<{
  text: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DecorateTextChunksInputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DecorateTextChunksInput'] = ResolversParentTypes['DecorateTextChunksInput']
> = ResolversObject<{
  chunks: Resolver<
    Array<Maybe<ResolversTypes['TextChunkWithOperation']>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DirectoryStructureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DirectoryStructure'] = ResolversParentTypes['DirectoryStructure']
> = ResolversObject<{
  contents: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']
> = ResolversObject<{
  content: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fileName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FileMultipleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FileMultiple'] = ResolversParentTypes['FileMultiple']
> = ResolversObject<{
  files: Resolver<
    Maybe<Array<Maybe<ResolversTypes['File']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FileTreeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FileTree'] = ResolversParentTypes['FileTree']
> = ResolversObject<{
  treeNodes: Resolver<
    Maybe<Array<Maybe<ResolversTypes['FileTreeNode']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FileTreeNodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FileTreeNode'] = ResolversParentTypes['FileTreeNode']
> = ResolversObject<{
  depth: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  nodeType: Resolver<
    Maybe<ResolversTypes['FileTreeNodeType']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FoldableResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Foldable'] = ResolversParentTypes['Foldable']
> = ResolversObject<{
  elements: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PlainElement']>>>,
    ParentType,
    ContextType
  >
  shortDescription: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']
> = ResolversObject<{
  alt: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  caption: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  height: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  width: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type NoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']
> = ResolversObject<{
  body: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']
> = ResolversObject<{
  id: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  nextPageNum: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  pageElements: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PageElement']>>>,
    ParentType,
    ContextType
  >
  pageNum: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  prevPageNum: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PageElementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageElement'] = ResolversParentTypes['PageElement']
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | 'Action'
    | 'CarouselImage'
    | 'Command'
    | 'CommandOutput'
    | 'Foldable'
    | 'Paragraph'
    | 'Subtitle'
    | 'Video',
    ParentType,
    ContextType
  >
}>

export type ParagraphResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Paragraph'] = ResolversParentTypes['Paragraph']
> = ResolversObject<{
  chunks: Resolver<
    Maybe<Array<Maybe<ResolversTypes['TextChunk']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PlainElementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PlainElement'] = ResolversParentTypes['PlainElement']
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | 'CarouselImage'
    | 'Command'
    | 'CommandOutput'
    | 'Paragraph'
    | 'Subtitle'
    | 'Video',
    ParentType,
    ContextType
  >
}>

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  action: Resolver<Maybe<ResolversTypes['Action']>, ParentType, ContextType>
  carousel: Resolver<
    Maybe<ResolversTypes['CarouselImage']>,
    ParentType,
    ContextType
  >
  file: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>
  filemultiple: Resolver<
    Maybe<ResolversTypes['FileMultiple']>,
    ParentType,
    ContextType
  >
  filetree: Resolver<Maybe<ResolversTypes['FileTree']>, ParentType, ContextType>
  foldable: Resolver<Maybe<ResolversTypes['Foldable']>, ParentType, ContextType>
  tutorial: Resolver<Maybe<ResolversTypes['Tutorial']>, ParentType, ContextType>
  video: Resolver<Maybe<ResolversTypes['Video']>, ParentType, ContextType>
}>

export type SubtitleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subtitle'] = ResolversParentTypes['Subtitle']
> = ResolversObject<{
  text: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TextChunkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TextChunk'] = ResolversParentTypes['TextChunk']
> = ResolversObject<{
  bold: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  highlight: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  hyperlinkUrl: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  inlineCode: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  strikeout: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  text: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TextChunkModifyOperationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TextChunkModifyOperation'] = ResolversParentTypes['TextChunkModifyOperation']
> = ResolversObject<{
  bold: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  highlight: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  hyperlinkUrl: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  strikeout: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  text: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TextChunkOperationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TextChunkOperation'] = ResolversParentTypes['TextChunkOperation']
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'TextChunkModifyOperation' | 'TextChunkSplitOperation',
    ParentType,
    ContextType
  >
}>

export type TextChunkSplitOperationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TextChunkSplitOperation'] = ResolversParentTypes['TextChunkSplitOperation']
> = ResolversObject<{
  splitAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  splitFirstHalfOperation: Resolver<
    Maybe<ResolversTypes['TextChunkModifyOperation']>,
    ParentType,
    ContextType
  >
  splitSecondHalfOperation: Resolver<
    Maybe<ResolversTypes['TextChunkModifyOperation']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TextChunkWithOperationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TextChunkWithOperation'] = ResolversParentTypes['TextChunkWithOperation']
> = ResolversObject<{
  chunk: Resolver<ResolversTypes['TextChunk'], ParentType, ContextType>
  operation: Resolver<
    Maybe<ResolversTypes['TextChunkOperation']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TutorialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tutorial'] = ResolversParentTypes['Tutorial']
> = ResolversObject<{
  author: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>
  id: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  pages: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Page']>>>,
    ParentType,
    ContextType
  >
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type VideoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Video'] = ResolversParentTypes['Video']
> = ResolversObject<{
  caption: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  platform: Resolver<
    Maybe<ResolversTypes['VideoPlatform']>,
    ParentType,
    ContextType
  >
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
  Action: ActionResolvers<ContextType>
  Author: AuthorResolvers<ContextType>
  CarouselImage: CarouselImageResolvers<ContextType>
  Command: CommandResolvers<ContextType>
  CommandOutput: CommandOutputResolvers<ContextType>
  DecorateTextChunksInput: DecorateTextChunksInputResolvers<ContextType>
  DirectoryStructure: DirectoryStructureResolvers<ContextType>
  File: FileResolvers<ContextType>
  FileMultiple: FileMultipleResolvers<ContextType>
  FileTree: FileTreeResolvers<ContextType>
  FileTreeNode: FileTreeNodeResolvers<ContextType>
  Foldable: FoldableResolvers<ContextType>
  Image: ImageResolvers<ContextType>
  Note: NoteResolvers<ContextType>
  Page: PageResolvers<ContextType>
  PageElement: PageElementResolvers<ContextType>
  Paragraph: ParagraphResolvers<ContextType>
  PlainElement: PlainElementResolvers<ContextType>
  Query: QueryResolvers<ContextType>
  Subtitle: SubtitleResolvers<ContextType>
  TextChunk: TextChunkResolvers<ContextType>
  TextChunkModifyOperation: TextChunkModifyOperationResolvers<ContextType>
  TextChunkOperation: TextChunkOperationResolvers<ContextType>
  TextChunkSplitOperation: TextChunkSplitOperationResolvers<ContextType>
  TextChunkWithOperation: TextChunkWithOperationResolvers<ContextType>
  Tutorial: TutorialResolvers<ContextType>
  Video: VideoResolvers<ContextType>
}>
