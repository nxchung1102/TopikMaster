import {Animated, GestureResponderEvent} from 'react-native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type ListUserType = {
  phone: string;
  password: string;
  name: string;
  id: number;
}[];

export type StateTopikType = {
  indexQuestion: number;
  closeQuestion: boolean;
};

export type UserHandlerType = {
  phone: string;
  password: string;
  name: string;
};

export type UserUpdateType = {
  phone: string | undefined;
  name: string | undefined;
  password: string | undefined;
  id: number | undefined;
};

export type UserType = {
  phone: string;
  password: string;
  name: string;
  id: number;
};

export type LoginType = {
  phone: string;
  password: string;
};
export type UserRegisterType = {
  phone: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export type TitleHeaderCustom = {
  title: string;
};

export type ContactCustom = {
  hotline: string;
  email: string;
};

export type QuestionCustom = {
  description: string;
  name: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export type ItemProps = {
  id: string;
  listCodeApp: [];
  subGroup: boolean;
  name: string;
  totalIELTS: number;
  totalGroup: number;
  totalTest: number;
  icon: null;
  thumbnail: string;
  isAccess: boolean;
  typeExam: number;
  status: number;
  percent: number;
};

export type DataProps = {
  item: {
    id: string;
    listCodeApp: [];
    subGroup: boolean;
    name: string;
    totalIELTS: number;
    totalGroup: number;
    totalTest: number;
    icon: null;
    thumbnail: string;
    isAccess: boolean;
    typeExam: number;
    status: number;
    percent: number;
  };
};

export type CourseType = {
  data: [];
  groupId: string;
  name: string;
  totalIELTS: number;
  total: number;
  percent: number;
  totalTest: number;
  totalGroup: number;
  thumbnail: string;
};

export type CourseDataType = {
  duration: number;
  groupId: string;
  ieltsId: string;
  idConfig: string;
  name: string;
  idLog: string;
  isAccess: boolean;
  sectionListening: {
    index: number;
    idSection: string;
    duration: number;
    ieltsId: string;
    idConfig: string;
    status: number;
    totalOptionQuestion: number;
    totalQuestion: number;
    type: number;
  };
  sectionReading: {
    index: number;
    idSection: string;
    duration: number;
    ieltsId: string;
    idConfig: string;
    status: number;
    totalOptionQuestion: number;
    totalQuestion: number;
    type: number;
  };
  sections: [
    {
      index: number;
      idSection: string;
      duration: number;
      ieltsId: string;
      idConfig: string;
      status: number;
      totalOptionQuestion: number;
      totalQuestion: number;
      type: number;
    },
    {
      index: number;
      idSection: string;
      duration: number;
      ieltsId: string;
      idConfig: string;
      status: number;
      totalOptionQuestion: number;
      totalQuestion: number;
      type: number;
    },
  ];
  status: number;
  statusIELTS: number;
  totalQuestion: number;
  typeCheckpoint: number;
  isSkillTest: boolean;
  percent: number;
  startTime: number;
  totalCorrect: number;
  totalIncorrect: number;
};

export type cardSelectedType = {
  idx: number;
  id: number;
  url: any;
  isFlip: boolean;
  isRender: boolean;
  isMatch: number;
}[];

export type cardType = {
  id: number;
  url: any;
  isFlip: boolean;
  isRender: boolean;
  isMatch: number;
};

export type typeCurrentRoute = {
  groupName: {name: string; score: number}[];
  quantityCard: number;
  themeSelected: {backgoundTheme: any; item: any; theme: any};
};

export type InfoExamType = {
  data: {
    duration: number;
    groupId: string;
    ieltsId: string;
    idConfig: string;
    name: string;
    idLog: string;
    isAccess: boolean;
    sectionListening?: {
      index: number;
      idSection: string;
      duration: number;
      ieltsId: string;
      idConfig: string;
      status: number;
      totalOptionQuestion: number;
      totalQuestion: number;
      type: number;
    };
    sectionReading?: {
      index: number;
      idSection: string;
      duration: number;
      ieltsId: string;
      idConfig: string;
      status: number;
      totalOptionQuestion: number;
      totalQuestion: number;
      type: number;
    };
    sectionWriting?: {
      index: number;
      idSection: string;
      duration: number;
      ieltsId: string;
      idConfig: string;
      status: number;
      totalOptionQuestion: number;
      totalQuestion: number;
      type: number;
    };
    sections: {
      index: number;
      idSection: string;
      duration: number;
      ieltsId: string;
      idConfig: string;
      status: number;
      totalOptionQuestion: number;
      totalQuestion: number;
      type: number;
    }[];
    status: number;
    statusIELTS: number;
    totalQuestion: number;
    typeSectionNow: number;
    idSectionNow: string;
    urlFileDetail: string;
    typeCheckpoint: number;
    isSkillTest: false;
    percent: number;
    startTime: number;
    totalCorrect: number;
    totalIncorrect: number;
  };
  totalRecords: number;
  elapsed: number;
  timeServer: number;
  message: string;
  status: number;
};

export type DoingExamType =
  | {
      data: {
        duration: number;
        endTime: number;
        endTimeSection: number;
        groupId: string;
        idLog: string;
        ieltsId: string;
        idConfig: string;
        name: string;
        questions: {
          index: number;
          indexTitle: number;
          partNumber: number;
          status: number;
          stepId: string;
          idMaterial: string;
          title: string;
          titleByMobile: string;
          explainQuestion: string;
          numberQuestion: number;
          content: string;
          speaking: {
            scoreIelts: {
              pronunciation: number;
              fluency: number;
              grammar: number;
              coherence: number;
              vocab: number;
              overall: number;
              scoreOverall: number;
            };
            typeServiceAI: number;
            typeApi: number;
            timeAnswerLimit: number;
          };
        }[];
        parts: {
          questions: {
            dataStandard?: {
              index: number;
              indexStart: number;
              indexEnd: number;
              indexTitle: number;
              indexMaterial: number;
              idMaterial: string;
              numberQuestion: number;
              totalOption: number;
              partNumber: number;
              question: string;
              title: string;
              options: {
                content: string;
                idOption: number;
                isAnswer: boolean;
                userSelected: boolean;
              }[];
              explain: string;
              questionUrlSpeech: string;
              statusStep: number;
              stepId: string;
              template: number;
              typeAnswer: number;
              typeView: number;
              userOptionId: [];
              dataOutline: [];
            };
            dataMaterial?: {
              codeVideo: string;
              contentHtml: string;
              data: {
                index: number;
                indexStart: number;
                indexEnd: number;
                indexTitle: number;
                indexMaterial: number;
                idMaterial: string;
                groupMaterial: number;
                numberQuestion: number;
                totalOption: number;
                partNumber: number;
                question: string;
                title: string;
                options: {
                  content: string;
                  idOption: number;
                  isAnswer: boolean;
                  userSelected: boolean;
                }[];
                explain: string;
                statusStep: number;
                stepId: string;
                template: number;
                typeAnswer: number;
                typeView: number;
                userOptionId: [];
                dataOutline: [];
                hint: string;
              }[];
              indexEnd: number;
              indexStart: number;
              materialId: string;
              partNumber: number;
              title: string;
              totalQuestion: number;
              typeData: number;
              urlMedia: string;
            };
            indexEnd: number;
            indexStart: number;
            partNumber: number;
            totalQuestion: number;
            typeData: number;
          }[];
          data: {
            dataStandard?: {
              index: number;
              indexStart: number;
              indexEnd: number;
              indexTitle: number;
              indexMaterial: number;
              idMaterial: string;
              numberQuestion: number;
              totalOption: number;
              partNumber: number;
              question: string;
              title: string;
              options: {
                content: string;
                idOption: number;
                isAnswer: boolean;
                userSelected: boolean;
              }[];
              explain: string;
              questionUrlSpeech: string;
              statusStep: number;
              stepId: string;
              template: number;
              typeAnswer: number;
              typeView: number;
              userOptionId: [];
              dataOutline: [];
            };
            dataMaterial?: {
              codeVideo: string;
              contentHtml: string;
              data: {
                index: number;
                indexStart: number;
                indexEnd: number;
                indexTitle: number;
                indexMaterial: number;
                idMaterial: string;
                groupMaterial: number;
                numberQuestion: number;
                totalOption: number;
                partNumber: number;
                question: string;
                title: string;
                options: {
                  content: string;
                  idOption: number;
                  isAnswer: boolean;
                  userSelected: boolean;
                }[];
                explain: string;
                statusStep: number;
                stepId: string;
                template: number;
                typeAnswer: number;
                typeView: number;
                userOptionId: [];
                dataOutline: [];
                hint: string;
              }[];
              indexEnd: number;
              indexStart: number;
              materialId: string;
              partNumber: number;
              title: string;
              totalQuestion: number;
              typeData: number;
              urlMedia: string;
            };
            indexEnd: number;
            indexStart: number;
            partNumber: number;
            totalQuestion: number;
            typeData: number;
          }[];
          indexEnd: number;
          indexStart: number;
          partNumber: number;
          totalQuestion: number;
        }[];
        data: {
          questions: {
            dataStandard: {
              index: number;
              indexStart: number;
              indexEnd: number;
              indexTitle: number;
              indexMaterial: number;
              idMaterial: string;
              numberQuestion: number;
              totalOption: number;
              partNumber: number;
              question: string;
              title: string;
              options: {
                content: string;
                idOption: number;
                isAnswer: boolean;
                userSelected: boolean;
              }[];
              explain: string;
              statusStep: number;
              stepId: string;
              template: number;
              typeAnswer: number;
              typeView: number;
              userOptionId: [];
              dataOutline: [];
            };
            indexEnd: number;
            indexStart: number;
            partNumber: number;
            totalQuestion: number;
            typeData: number;
          }[];
          data: {
            dataStandard: {
              index: number;
              indexStart: number;
              indexEnd: number;
              indexTitle: number;
              indexMaterial: number;
              idMaterial: string;
              numberQuestion: number;
              totalOption: number;
              partNumber: number;
              question: string;
              title: string;
              options: {
                content: string;
                idOption: number;
                isAnswer: boolean;
                userSelected: boolean;
              }[];
              explain: string;
              statusStep: number;
              stepId: string;
              template: number;
              typeAnswer: number;
              typeView: number;
              userOptionId: [];
              dataOutline: [];
            };
            indexEnd: number;
            indexStart: number;
            partNumber: number;
            totalQuestion: number;
            typeData: number;
          }[];
          indexEnd: number;
          indexStart: number;
          partNumber: number;
          totalQuestion: number;
        }[];
        startTime: number;
        startTimeSection: number;
        timeServer: number;
        totalOptionQuestion: number;
        totalQuestion: number;
        typeSection: number;
        typeCheckpoint: number;
        fileAnswerUser: string;
        preSignedUrlAnswerUser: string;
        isEnable: boolean;
        isSectionEnd: boolean;
        isSkillTest: boolean;
      };
      totalRecords: number;
      elapsed: number;
      timeServer: number;
      message: string;
      status: number;
    }
  | undefined;

export type AnswerSelectProps = {
  dataOptionId?: number[];
  dataOptionText?: string[];
  isSkip: boolean;
  stepId: string;
  studentDoRight: any;
};

export interface updateSectionType {
  data: AnswerSelectProps[];
  idConfig: string;
  idLog: string;
  typeSection: number;
}

export type postDoneExamType = {
  idConfig: string;
  idLog: string;
};
export type dataQuestionType =
  | {
      dataStandard?: {
        index: number;
        indexStart: number;
        indexEnd: number;
        indexTitle: number;
        indexMaterial: number;
        idMaterial: string;
        numberQuestion: number;
        totalOption: number;
        partNumber: number;
        question: string;
        title: string;
        options: {
          content: string;
          idOption: number;
          isAnswer: boolean;
          userSelected: boolean;
        }[];
        explain: string;
        questionUrlSpeech: string;
        statusStep: number;
        stepId: string;
        template: number;
        typeAnswer: number;
        typeView: number;
        userOptionId: [];
        dataOutline: [];
      };
      dataMaterial?: {
        codeVideo: string;
        contentHtml: string;
        data: {
          index: number;
          indexStart: number;
          indexEnd: number;
          indexTitle: number;
          indexMaterial: number;
          idMaterial: string;
          groupMaterial: number;
          numberQuestion: number;
          totalOption: number;
          partNumber: number;
          question: string;
          title: string;
          options: {
            content: string;
            idOption: number;
            isAnswer: boolean;
            userSelected: boolean;
          }[];
          explain: string;
          statusStep: number;
          stepId: string;
          template: number;
          typeAnswer: number;
          typeView: number;
          userOptionId: [];
          dataOutline: [];
          hint: string;
        }[];
        indexEnd: number;
        indexStart: number;
        materialId: string;
        partNumber: number;
        title: string;
        totalQuestion: number;
        typeData: number;
        urlMedia: string;
      };
      indexEnd: number;
      indexStart: number;
      partNumber: number;
      totalQuestion: number;
      typeData: number;
    }
  | undefined;
export type dataPartType =
  | {
      questions: {
        dataStandard?: {
          index: number;
          indexStart: number;
          indexEnd: number;
          indexTitle: number;
          indexMaterial: number;
          idMaterial: string;
          numberQuestion: number;
          totalOption: number;
          partNumber: number;
          question: string;
          title: string;
          options: {
            content: string;
            idOption: number;
            isAnswer: boolean;
            userSelected: boolean;
          }[];
          explain: string;
          questionUrlSpeech: string;
          statusStep: number;
          stepId: string;
          template: number;
          typeAnswer: number;
          typeView: number;
          userOptionId: [];
          dataOutline: [];
        };
        dataMaterial?: {
          codeVideo: string;
          contentHtml: string;
          data: {
            index: number;
            indexStart: number;
            indexEnd: number;
            indexTitle: number;
            indexMaterial: number;
            idMaterial: string;
            groupMaterial: number;
            numberQuestion: number;
            totalOption: number;
            partNumber: number;
            question: string;
            title: string;
            options: {
              content: string;
              idOption: number;
              isAnswer: boolean;
              userSelected: boolean;
            }[];
            explain: string;
            statusStep: number;
            stepId: string;
            template: number;
            typeAnswer: number;
            typeView: number;
            userOptionId: [];
            dataOutline: [];
            hint: string;
          }[];
          indexEnd: number;
          indexStart: number;
          materialId: string;
          partNumber: number;
          title: string;
          totalQuestion: number;
          typeData: number;
          urlMedia: string;
        };
        indexEnd: number;
        indexStart: number;
        partNumber: number;
        totalQuestion: number;
        typeData: number;
      }[];
      indexEnd: number;
      indexStart: number;
      partNumber: number;
      totalQuestion: number;
    }
  | undefined;
export type dataStandardType =
  | {
      index: number;
      indexStart: number;
      indexEnd: number;
      indexTitle: number;
      indexMaterial: number;
      idMaterial: string;
      numberQuestion: number;
      totalOption: number;
      partNumber: number;
      question: string;
      title: string;
      options: {
        content: string;
        idOption: number;
        isAnswer: boolean;
        userSelected: boolean;
      }[];
      explain: string;
      questionUrlSpeech: string;
      statusStep: number;
      stepId: string;
      template: number;
      typeAnswer: number;
      typeView: number;
      userOptionId: [];
      dataOutline: [];
      userOptionText: string[];
      contentWritingGPT: {
        FULFILMENT: string;
        REWRITE: string;
        SCORE: string;
        VOCA_GRAMMAR: string;
      };
    }
  | undefined;

export type dataMaterialType =
  | {
      codeVideo: string;
      contentHtml: string;
      data: {
        index: number;
        indexStart: number;
        indexEnd: number;
        indexTitle: number;
        indexMaterial: number;
        idMaterial: string;
        groupMaterial: number;
        numberQuestion: number;
        totalOption: number;
        partNumber: number;
        question: string;
        title: string;
        options: {
          content: string;
          idOption: number;
          isAnswer: boolean;
          userSelected: boolean;
        }[];
        explain: string;
        statusStep: number;
        stepId: string;
        template: number;
        typeAnswer: number;
        typeView: number;
        userOptionId: [];
        dataOutline: [];
        hint: string;
      }[];
      indexEnd: number;
      indexStart: number;
      materialId: string;
      partNumber: number;
      title: string;
      totalQuestion: number;
      typeData: number;
      urlMedia: string;
    }
  | undefined;

export type listAnswerType = {
  index: number;
  indexTitle?: number;
  partNumber?: number;
  status?: number;
  stepId: string;
  idMaterial?: string;
  numberQuestion?: number;
  answer?: number | null;
  answerInput?: string[] | null;
}[];

export type AnswerType = {
  index: number;
  indexTitle?: number;
  partNumber?: number;
  status?: number;
  stepId: string;
  idMaterial?: string;
  numberQuestion?: number;
  answer?: number | null;
  answerInput?: string[] | null;
};

// new type modal

export type confirmModalType = {
  handleState: () => void;
  slideAnim: Animated.Value;
  params?: any;
  navigation?: any;
  routeName?: string;
};

export type openModalType = {
  handleState: () => void;
  slideAnim: Animated.Value;
  screenHeight: number;
  modalHeight: number;
};

export type closeModalType = {
  handleState: () => void;
  slideAnim: Animated.Value;
};

export interface GlobalDoingExamProps {
  idConfig: string;
  indexPart: number;
  indexQuestion: number;
  updateSection: updateSectionType;
  listQuestionAndAnswer: listAnswerType;
}

export type HeaderDoingExamType = {
  openModalExit: () => void;
  openModalSubmit: () => void;
  closeTable: () => void;
  initTime: number;
  sectionLength: number;
  typeSection: number;
  idConfig: string;
  idLog: string;
  groupId: string;
};
