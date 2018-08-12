export class TargetAudiance {
    constructor(
        public languages?: string[],
        public genders?: string[],
        public ageRange?: number[],
        public keywords?: string[],
        public locations?: string[],
        public interests?: string[],
    ) {}
}
