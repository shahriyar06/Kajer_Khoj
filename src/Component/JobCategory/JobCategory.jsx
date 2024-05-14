import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllJobsoffer from '../AllJobsoffer/AllJobsoffer';
import OnSite from '../OnSite/OnSite';
import Remote from '../Remote/Remote';
import Hybrid from '../Hybrid/Hybrid';
import PartTime from '../PartTime/PartTime';

const JobCategory = () => {
    return (
        <div className="mb-16">
            <div className="text-center space-y-2 mb-6">
                <h1 className="text-6xl font-semibold">Job Offer</h1>
                <p className="text-lg">A better career is out there. We will help you find it to use.</p>
            </div>
            <div>
                <Tabs className='w-11/12 mx-auto'>
                    <TabList className='text-center text-accent'>
                        <Tab>All Jobs</Tab>
                        <Tab>On-Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part Time</Tab>
                    </TabList>
                    <TabPanel>
                        <AllJobsoffer></AllJobsoffer>
                    </TabPanel>
                    <TabPanel>
                        <OnSite></OnSite>
                    </TabPanel>
                    <TabPanel>
                        <Remote></Remote>
                    </TabPanel>
                    <TabPanel>
                        <Hybrid></Hybrid>
                    </TabPanel>
                    <TabPanel>
                        <PartTime></PartTime>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default JobCategory;