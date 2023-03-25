import { AfterTasteSlider, AppearanceSlider, BodyAttractionSlider, HygieneSlider, PassionSlider, PersonalitySlider, SkillSlider } from './GradeSliders';

const Grade = function (id, symbol, name, component) {
    this.id = id;
    this.symbol = symbol;
    this.name = name;
    this.component = component;
}
export const grades = [
    new Grade('appearance', '👨‍🦱', 'General Appearance', AppearanceSlider),
    new Grade('bodyAttraction', '🤸', 'Body Attraction', BodyAttractionSlider),
    new Grade('personality', '👤', 'Personality', PersonalitySlider),
    new Grade('hygiene', '🛀', 'Hygiene', HygieneSlider),
    new Grade('passion', '🧪', 'Passinon&Chemistry', PassionSlider),
    new Grade('skills', '💫', 'Sex Skills', SkillSlider),
    new Grade('afterwards', '⌛', 'Feelings Afterwards', AfterTasteSlider),
]

const TB = (name) => ['⬆️','⬇️'].map(s => s + ' ' + name)
export const activities = [
    'Prelude',
    'Kissing',
    ...TB('Handjob'),
    ...TB('Edging'),
    ...TB('BJ'),
    ...TB('Gagging'),
    'Flip Fuck',
    ...TB('Pounding'),
    'Doggy',
    'Missionary',
    'Rider',
    'Staying',
    ...TB('Rimming'),
    ...TB('Fingering'),
    ...TB('Feet'),
    ...TB('Sniff Fetish'),    
    ...TB('Bounding'),
    ...TB('Golden Rain'),
    ...TB('Choking'),
    ...TB('Fist'),
    ...TB('Massage'),
    ...TB('Rough'),
    'Moresome'
]

export const ages = [
    '18-21',
    '21-24',
    '25-28',
    '29-32',
    '33-36',
    '36-42',
    '43-48',
    '49+'
]