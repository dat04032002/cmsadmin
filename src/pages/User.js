
import {
    Row,
    Col,
    Card,
    Radio,
    Table,

    Modal,
    Form,
    Input,
    DatePicker, 
    Select,

    Button,
    Avatar,
    Typography,
  } from "antd";


  import React, { useState } from "react";
  const { Title } = Typography;



const columns = [
    {
      title: "Tên",
      dataIndex: "UserName",
      key: "UserName",
      width: "32%",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
  
    {
      title: "Ngày sinh",
      key: "Brithday",
      dataIndex: "Brithday",
    },
    {
      title: "Chức vụ",
      key: "Position",
      dataIndex: "Position",
    },
  ];

  const data = [
    {
      key: "1",
      UserName: (
        <>
          <Avatar.Group>
           
            <div className="avatar-info">
              <Title level={5}>Michael John</Title>
           
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      Email: (
        <>
          <div className="author-info">
          
            <p>michael@mail.com</p>
          </div>
        </>
      ),
  
      Brithday: (
        <>
           <div className="ant-employed">
            <span>23/04/18</span>
           
          </div>
        </>
      ),
      Position: (
        <>
          <div className="author-info">
            <Title level={5}>Manager</Title>
           
          </div>
        </>
      ),
    },
  ];



  const { Option } = Select;
  
  const EmployeeFormPopup = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
  
    // Hàm mở popup
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    // Hàm đóng popup
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    // Hàm xử lý khi nhấn nút "Submit"
    const handleOk = () => {
      form
        .validateFields()
        .then((values) => {
          // Xử lý dữ liệu form ở đây, ví dụ như gửi đến server
          console.log("Form Values: ", values);
          setIsModalVisible(false); // Đóng popup sau khi submit
        })
        .catch((info) => {
          console.log("Validation Failed:", info);
        });
    };
  
    
   
    return (
      <>
      
        <Button type="primary" onClick={showModal} className="bg-blue-500">
          Thêm Nhân Viên
        </Button>
        <Modal
          title="Thêm Nhân Viên"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Lưu"
          cancelText="Hủy"
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="name"
              label="Tên Nhân Viên"
              rules={[{ required: true, message: "Vui lòng nhập tên nhân viên!" }]}
            >
              <Input placeholder="Nhập tên nhân viên" />
            </Form.Item>
  
            <Form.Item
              name="dob"
              label="Ngày Sinh"
              rules={[{ required: true, message: "Vui lòng chọn ngày sinh!" }]}
            >
              <DatePicker
                placeholder="Chọn ngày sinh"
                style={{ width: "100%" }}
                
              />
            </Form.Item>
  
            <Form.Item
              name="email"
              label="Email"
             
            >
              <Input placeholder="abc@gmail.com"  />
            </Form.Item>
  
            <Form.Item
              name="position"
              label="Chức Vụ"
              rules={[{ required: true, message: "Vui lòng chọn chức vụ!" }]}
            >
              <Select placeholder="Chọn chức vụ">
                <Option value="manager">Quản Lý</Option>
                <Option value="developer">Lập Trình Viên</Option>
                <Option value="tester">Kiểm Thử</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  };
  

export default function User() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);
    const [employees, setEmployees] = useState([]);

    
  return (
    <div>
         <div className="dashboard-container">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Danh sách nhân viên</h2>
        {/* Nút Thêm mới */}
        <EmployeeFormPopup />
      </div>

      {/* Dữ liệu nhân viên có thể được hiển thị ở đây */}
      <div className="employee-data">
      <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Danh sách nhân viên"
              
            >
              <div className="table-responsive">
                <Table
                  columns= {columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>

           
          </Col>
        </Row>
      </div>
    </div>
     
    </div>
  )
}
