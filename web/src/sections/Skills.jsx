import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import skillsData from '../datas/skills'

import AOS from 'aos'

function SkillCard({ title, skillNode }) {
    return (
        <Card className="p-2 shadow border-0 bg-light">
            <Card.Title className="fs-6">
                <span className="font-title">{title}</span>
            </Card.Title>
            <Card.Body>
                <div className="w-100 h-100 d-flex gap-4 flex-wrap">
                    {skillNode.map((lang, index) =>
                        typeof lang.Component === 'string' ? (
                            <div
                                data-aos="fade-down"
                                data-aos-delay={index * 100}
                                data-aos-once="true"
                                className="fw-bold p-2 d-flex align-items-center rounded-2"
                                style={{
                                    color: lang.color,
                                    backgroundColor: lang.backgroundColor,
                                }}
                                key={index}
                            >
                                {lang.Component}
                            </div>
                        ) : (
                            <span
                                data-aos="fade-down"
                                data-aos-delay={index * 100}
                                data-aos-once="true"
                                key={index}
                            >
                                <lang.Component size={40} color={lang.color} />
                            </span>
                        )
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}

export default function () {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div
            id="skills"
            className=" position-relative my-5 d-flex align-items-center justify-content-center"
        >
            <div className="h-100 w-100 z-999">
                <div>
                    <h1 className="font-topic text-center fs-1 my-5">
                        Compétences
                    </h1>
                </div>
                <div className="d-grid cols-lg-2 gap-4">
                    {skillsData.map((each, index) => (
                        <SkillCard
                            key={index}
                            title={each.title}
                            skillNode={each.skillNode}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
