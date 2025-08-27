/* eslint-disable react/prop-types */
import './Timeline.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import deloitte_logo from '../../assets/deloitte-logo.wine.svg'
/**
 * Vertical Timeline component
 * Props:
 * - items: Array<{
 *     role: string,
 *     company: string,
 *     duration: string,
 *     achievements: string[]
 *   }>
 * - title?: string
 */

const sampleTimeline = [
  {
    role: 'Analyst Trainee',
    company: 'Deloitte US-India',
    duration: 'Sep 2025 – Present',
    logo: deloitte_logo,
    achievements: [
      'Built a web app using Spring Boot and React to automate data processing, reducing manual effort by 30%',
      'Improved page load by 20% via code-splitting and image optimization',
      'Wrote unit tests to raise coverage to 85%'
    ]
  },
  
]


export default function Timeline({ items = sampleTimeline, title = 'Experience' }) {
  return (
    <section className="vtl timeline" id="timeline">
        <div className="timeline-title">
            <h1>{title}</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="vtl__grid">

            {/* center line */}
            <div className="vtl__line" aria-hidden="true" />

            {items.map((item, idx) => (
                <div key={idx} className="vtl__row">
                    {/* left column: role, company, duration */}
                    <div className="vtl__left">
                        <div className="vtl__field">
                            <span className="vtl__icon" aria-hidden="true">📌</span>
                            <span className="vtl__label">Role</span>
                            <span className="vtl__value">{item.role}</span>
                        </div>
                        <div className="vtl__field">
                            <span className="vtl__icon" aria-hidden="true">🏢</span>
                            <span className="vtl__label">Company</span>
                            <span className="vtl__value">{item.company}</span>
                        </div>
                        <div className="vtl__field">
                            <span className="vtl__icon" aria-hidden="true">⏳</span>
                            <span className="vtl__label">Duration</span>
                            <span className="vtl__value">{item.duration}</span>
                        </div>
                    </div>

                    {/* center node aligned to the line: show company logo or fallback */}
                    <div className="vtl__node">
                        {item.logo ? (
                            <img src={item.logo} alt={`${item.company} logo`} />
                        ) : (
                            <span className="vtl__node-fallback" aria-hidden="true">🏢</span>
                        )}
                    </div>

                    {/* right column: achievements */}
                    <div className="vtl__right">
                        <ul className="vtl__bullets">
                            {item.achievements?.map((point, pIdx) => (
                            <li key={pIdx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}
