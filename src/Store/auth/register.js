import { actionHandler } from "../api";


const InitialRegUrl = `/api/method/guidestar.api.npo_registration.make_initial_registration`;
const SubQuestionsUrl = `/api/method/guidestar.api.npo_registration.make_sub_question_answers`;
const SubmitDiscoverPanUrl = `api/method/guidestar.api.npo_registration.make_discover_registration_section_1`;

const args = {
    application_no: ''
};

// Convert the args object to a JSON string and encode it for use in a URL
const argsJsonString = encodeURIComponent(JSON.stringify(args));

const initialRegQ = `/api/method/guidestar.api.npo_registration.get_initial_registration_questions?args=${argsJsonString}`;
const panDiscoverQ = `/api/method/guidestar.api.npo_registration.get_discover_registration_section_1_questions?args=${argsJsonString}`;
const legalDiscoverQ = `/api/method/guidestar.api.npo_registration.get_discover_registration_section_2_questions?args=${argsJsonString}`;



// initial registration api calls
export const initialLoading = async () => {

    try {
        const { data } = await actionHandler({
            url: initialRegQ,
            method: 'GET',
        });
        console.log(data)
        return data;
    } catch (error) {
        throw error;
    }
}

export const initialRegistration = async (payload) => {
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


// discover pan api calls

export const discoveryInitialQ = async () => {
    try {
        const { data } = await actionHandler({
            url: panDiscoverQ,
            method: 'GET',
        });

        return data;
    } catch (error) {
        throw error;
    }
}

export const discoverPanRegCall = async (payload) => {
    try {
        const { data } = await actionHandler({
            url: SubmitDiscoverPanUrl,
            method: 'POST',
            data: payload,
        });

        return data;
    } catch (error) {
        throw error;
    }
}

// discover legal api calls

export const discoveryLegalQ = async () => {
    try {
        const { data } = await actionHandler({
            url: legalDiscoverQ,
            method: 'GET',
        });

        return data;
    } catch (error) {
        throw error;
    }
}