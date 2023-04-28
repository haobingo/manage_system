//用于创建路由器
import VueRouter from "vue-router";

//引入组件
import MainPage from '@/pages/MainPage'
import LoginPage from '@/pages/LoginPage2'
import courseBasicInformation from '@/components/courseBasicInformation/courseBasicInformation'
import programObjective from '@/components/courseBasicInformation/programObjective'

import classInformation from '@/components/courseBasicInformation/classInformation'
import teachingPro from '@/components/courseBasicInformation/teachingPros/teachingPro'
import sudoTeachingPro from '@/components/courseBasicInformation/teachingPros/sudoTeachingPro'
import SuperTeachingPro from '@/components/courseBasicInformation/teachingPros/SuperTeachingPro'
import indexPoint from '@/components/courseBasicInformation/indexPoint'
import basicInformationTable from '@/components/courseExamMethods/basicInformationTable'

import welcome from '@/components/welcome'
import finalTable from '@/components/courseExamMethods/finalTable'
import usualPreformanceTable from '@/components/classTables/usualPreformanceTable'
import finalStatisticsTable from '@/components/classTables/finalStatisticsTable'
import finalComprehensiveTable from '@/components/classTables/finalComprehensiveTable'
import analysisTable from '@/components/classTables/analysisTable'
import programTable from '@/components/classTables/programTable'

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: LoginPage
        },
        {
            path: "/MainPage",
            component: MainPage,
            children: [             
                {
                    path: 'analysisTable',
                    component: analysisTable
                },
                {
                    path: 'programTable',
                    component: programTable
                },
                {
                    path: 'finalStatisticsTable',
                    component: finalStatisticsTable
                },

                {
                    path: 'finalComprehensiveTable',
                    component: finalComprehensiveTable
                },
                {
                    path: 'finalTable',
                    component: finalTable
                },
                {
                    path: 'usualPreformanceTable',
                    component: usualPreformanceTable
                },
                {
                    path: 'basicInformationTable',
                    component: basicInformationTable
                },
                {
                    path: 'welcome', //  课程基本信息
                    component: welcome
                },
                {
                    path: 'courseBasicInformation', //  课程基本信息
                    component: courseBasicInformation
                },
                {
                    path:'teachingPro', //教学大纲
                    component:teachingPro
                },
                {
                    path:'sudoTeachingPro', //系主任教学大纲
                    component:sudoTeachingPro
                },
                {
                    path:'SuperTeachingPro', //院长教学大纲
                    component:SuperTeachingPro
                },
                {
                    path:'indexPoint', //毕业要求指标点
                    component:indexPoint
                },
                {
                    path: 'classInformation', //  课程详细基本信息
                    component: classInformation,
                    props: true,
                    children: [
                        {
                            path: 'programObjective',
                            component: programObjective,
                        }
                    ]
                },
            ]
        },
    ]
})
