
export class Link {
    constructor(
        public name: string,
        public url: string,
        public description: string,
        public icon: string
    ) { }
}

export class GitHub extends Link {
    constructor(url: string, description: string | undefined) {
        super(
            'GitHub',
            'https://github.com/' + url,
            'My github profile',
            'fa-brands fa-github text-white'
        );
    }
}

export class LinkedIn extends Link {
    constructor(url: string, description: string | undefined) {
        super(
            'LinkedIn',
            "https://linkedin.com/in/" + url,
            'My linkedin profile',
            'fa-brands fa-linkedin-in text-white'
        );
    }
}

export class Email extends Link {
    constructor(url: string, description: string | undefined) {
        super(
            'Email',
            'mailto:' + url,
            'My email',
            'fa-regular fa-envelope text-white'
        );
    }
}

export class Website extends Link {
    constructor(url: string, description: string | undefined) {
        super(
            'Website',
            url,
            'My website',
            'fas fa-globe text-white'
        );
    }
}



export const links = [
    new GitHub('KivalM', 'My github profile'),
    new LinkedIn('kivalm', 'My linkedin profile'),
    new Email('kmahadew21@gmail.com', 'My email'),
];