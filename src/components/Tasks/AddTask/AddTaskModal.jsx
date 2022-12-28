import React, { useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";

const AddTaskModal = () => {
  const [visible, setVisible] = useState(false);
  const handleAddTask = () => {
    console.log("task added");
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={() => setVisible(true)}>Toggle modal</Button>;
        <Modal
          visible={visible}
          size="md"
          popup={true}
          onClose={() => setVisible(false)}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required={true} />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default AddTaskModal;
