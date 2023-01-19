import React, { useState } from 'react';

const RowItem = (props) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div
        style={{ width: '100%', border: '1px solid red' }}
        onClick={(e) => {
          setActive((prv) => !prv);
        }}
      >
        <div style={{ margin: '10px' }}>
          <div className="flex_cl">
            <div className="f_item_a">
              <div className=""></div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwhHcerkZV1PkVxFGKXCOGpov3UFHBMxu-FsQcrpP616oPRXMgbh2bu-ooqTkKR-Uj20&usqp=CAU"
                width="40px"
                height="50px"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <div className="f_item_b">
              <div>
                <h3 style={{ margin: '0', textTransform: 'capitalize' }}>
                  {props.item.name}
                </h3>
              </div>
              <div>{props.item.title}</div>
            </div>
            <div className="f_item_c">{props.item.time}</div>
          </div>
          {!active && (
            <div style={{ marginLeft: '10%' }}>
              {props.item.desc.substring(0, 10)}
            </div>
          )}
          {active && <div>{props.item.desc}</div>}
        </div>
      </div>
    </div>
  );
};

export default RowItem;
