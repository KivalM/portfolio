import { projects } from '$lib/data/projects.js';
export const prerender = true;

export function load({ }) {
    let work = projects.filter(project => project.category === 'Work');
    let personal = projects.filter(project => project.category === 'Personal');
    let university = projects.filter(project => project.category === 'University');

    return {
        work: work,
        personal: personal,
        university: university,
    };
}