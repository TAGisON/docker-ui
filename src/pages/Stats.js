import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Table from './Table';

const Stats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://192.168.100.148:3230/api/container/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  const columns = [
    { Header: 'ID', accessor: 'Id' },
    { Header: 'Name', accessor: 'Names' },
    { Header: 'CPU Usage', accessor: 'CPUUsage' },
    { Header: 'Memory Usage', accessor: 'MemoryUsage' },
    { Header: 'Network IO', accessor: 'NetworkIO' },
    { Header: 'Block IO', accessor: 'BlockIO' }
  ];

  return (
    <Card title="Container Stats">
      <Table columns={columns} data={stats} />
    </Card>
  );
};

export default Stats;
