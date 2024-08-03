import { actionHandler } from "./api";


const loginUrl = `/api/method/guidestar.api.user.login`;
const InitialRegUrl = `/api/method/guidestar.api.npo_registration.make_initial_registration`;
const SubQuestionsUrl = `/api/method/guidestar.api.npo_registration.make_sub_question_answers`;
const initialLoadingQuestions = `/api/method/guidestar.api.npo_registration.get_initial_registration_questions`;

export const login = async (payload) => {
    try {
        const { data } = await actionHandler({
            url: loginUrl,
            method: 'POST',
            data: payload,
        });
        if (data?.token) {
            const token = data.token
            localStorage.setItem("accessToken", token)
        }
        return data;
    } catch (error) {
        throw error;
    }
};


export const initialLoading = async () => {

    try {
        const { data } = await actionHandler({
            url: initialLoadingQuestions,
            method: 'GET',
        });
        console.log(data)
        return data;
    } catch (error) {
        throw error;
    }
}

export const initialRegistration = async (payload) => {
    console.log(payload)
    try {
        const { data } = await actionHandler({
            url: InitialRegUrl,
            method: 'POST',
            data: payload,
        });

        return data;
    } catch (error) {
        throw error;
    }
}
export const initialSubRegistration = async (payload) => {
    console.log(payload)
    try {
        const { data } = await actionHandler({
            url: SubQuestionsUrl,
            method: 'POST',
            data: payload,
        });

        return data;
    } catch (error) {
        throw error;
    }
}
