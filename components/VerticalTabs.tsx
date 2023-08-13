import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const workHistory = [
    {
        id: 1,
        title: 'Knowby Pro',
        html: `<div>
                <h2>KNOWBY PRO - MAY 2023 - CURRENT</h2>
                <h3>SENIOR JAVASCRIPT DEVELOPER</h3>
                <br/>
                <ul>
                    <li>Contributed to the development of dynamic web applications using React.JS, Next.JS, TypeScript, JavaScript, and Node.JS.</li>
                    <li>Designed, developed, and integrated robust APIs while managing code across multiple repositories.</li>
                    <li>Created Node applications to facilitate transfer of Legacy data to current state.</li>
                    <li>Played a pivotal role in enhancing and optimizing Knowby's Retool interfaces.</li>
                    <li>Worked closely with the product team to translate digital visions into tangible, functional platforms.</li>
                    <li>Demonstrated a consistent ability to create engaging, intuitive user interfaces, ensuring an optimal user experience.</li>
                </ul>
            </div>`
    },
    {
        id: 2,
        title: 'Shine Lawyers',
        html: `<div>
                <h2>SHINE LAWYERS - MAY 2022 - MAY 2023</h2>
                <h3>FRONT-END DEVELOPER - MARKETING DEPARTMENT</h3>
                <br/>
                <ul>
                    <li>Architected and developed the National Shine Lawyers "Website Overhaul Project" from a frontend perspective, delivering a custom website builder.</li>
                    <li>Supervised and assisted with the entire SDLC, focusing on frontend development and user experience design.</li>
                    <li>Devised an internal component library using React, TypeScript, and Next.js to streamline brand alignment and accelerate future development.</li>
                    <li>Integrated Contentful headless CMS to empower content management by non-technical staff.</li>
                    <li>Instituted type-safety across the software stack, augmenting code stability and developer experience.</li>
                    <li>Transformed UI/UX designs into live components and websites, collaborating with other developers for quality and consistency.</li>
                    <li>Contributed to the Agile project, ensuring timely delivery and adherence to scope within each Sprint.</li>
                    <li>Maintained subsidiary and legacy websites, ensuring peak performance and user experience for 300,000+ unique users monthly.</li>
                </ul>
            </div>`
    },
    {
        id: 3,
        title: 'Online Solutions Experts',
        html: `<div>
                <h2>ONLINE SOLUTIONS EXPERTS - MAR 2021 - MAY 2022</h2>
                <h3>WEB DEVELOPER - AGENCY</h3>
                <br/>
                <ul>
                    <li>Developed visually impressive websites and eCommerce stores using JavaScript and React.</li>
                    <li>Leveraged the power of React to deliver interactive UI components, enhancing user engagement and experience.</li>
                    <li>Utilized React Router for effective page routing and implemented lazy loading techniques to optimize load times and performance.</li>
                    <li>Facilitated transactions by setting up and integrating Stripe API.</li>
                    <li>Optimized SEO through the use of semantic HTML5 and industry best practices.</li>
                    <li>Converted UI/UX designs into responsive, cross-browser compatible websites in an Agile environment.</li>
                    <li>Transformed complex UI/UX designs into live, responsive, and cross-browser compatible websites, upholding design integrity and accessibility standards.</li>
                </ul>
            </div>`
    },
    {
        id: 4,
        title: 'Dynamic Digital Solutions',
        html: `<div>
                <h2>DYNAMIC DIGITAL SOLUTIONS - FEB 2019 - MAR 2021</h2>
                <h3>JUNIOR DEVELOPER - BESPOKE SOFTWARE</h3>
                <br/>
                <ul>
                    <li>Utilized modern JavaScript and React to construct dynamic, engaging websites, adhering to industry best practices for code quality and performance optimization.</li>
                    <li>Integrated applications seamlessly with third-party platforms using REST APIs (Xero, CRMs, Square), ensuring data consistency and interoperability.</li>
                    <li>Participated in client meetings to understand project requirements and scope, providing technical insights to guide solution development.</li>
                    <li>Employed responsive design principles to ensure websites functioned optimally across various devices and screen sizes, enhancing user experience and accessibility.</li>
                </ul>
            </div>`
    },
    {
        id: 5,
        title: 'Technical Skills & Education',
        html: `<div>
                <h2>TECHNICAL SKILLS</h2>
                <p><strong>Expertise:</strong></p>
                <p>JavaScript, React, TypeScript, CSS/SCSS, Styled-Components, Next.js, Node.js, Git, REST API, SQL/NoSQL, GraphQL, Netlify & Vercel, CMS.</p>
                <br/>
                <p><strong>Familiarity:</strong></p>
                <p>AWS, Google Analytics, Google Tag Manager, Vercel, PHP & WordPress, Gatsby, Prisma, Tailwind.</p>
                <br />
                <h2>EDUCATION</h2>
                <p><strong>University of South Australia</strong></p>
                <p>Bachelor of Information Technology & Data Analytics</p>
                <p>2019 - 2021</p>
                <br />
                <p><strong>Central Queensland University</strong></p>
                <p>Diploma of Business</p>
                <p>2018 - 2019</p>
            </div>`
    },
];

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ 
                    p: 3,
                    color: '#8892b0',
                    fontSize: '18px',
                    paddingLeft: '50px',
                    '@media (max-width: 700px)': {
                        paddingLeft: '0',
                    }
                }}>
                    <Typography fontSize={'18px'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ 
                flexGrow: 1,
                bgcolor: 'none',
                display: 'flex',
                height: 'fit-content',
                minHeight: '450px',
                width: '100%',
                transition: 'all 0.5s ease',
                '@media (max-width: 700px)': {
                    flexDirection: 'column',
                }
            }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    borderRight: 2, 
                    borderColor: 'rgb(154, 153, 226, 0.5)', 
                    minWidth: 'fit-content' 
                }}
            >
                {workHistory.map((work, index) => (
                    <Tab key={index} label={work.title} {...a11yProps(index)} sx={{
                        alignItems: 'flex-start',
                        color: '#cfd5e9',
                        fontWeight: '400',
                        '@media (max-width: 700px)': {
                            paddingLeft: '0',
                        }
                    }}/>
                ))}
            </Tabs>
            {workHistory.map((work, index) => (
                <TabPanel key={index} value={value} index={index}>
                    <div dangerouslySetInnerHTML={{ __html: work.html }} />
                </TabPanel>
            ))}
        </Box>
    );
}