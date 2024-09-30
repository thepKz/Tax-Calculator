import React from 'react';

const RegionInfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Thông tin về các vùng</h2>
        <div className="region-info">
          <h3>Vùng 1</h3>   
          <p>Bao gồm:</p>
          <ul>
            <li>Các quận và các huyện Gia Lâm, Đông Anh, Sóc Sơn, Thanh Trì, Thường Tín, Hoài Đức, Thạch Thất, Quốc Oai, Thanh Oai, Mê Linh, Chương Mỹ và thị xã Sơn Tây thuộc thành phố Hà Nội</li>
            <li>Thành phố Hạ Long thuộc tỉnh Quảng Ninh</li>
            <li>Các quận và các huyện Thủy Nguyên, An Dương, An Lão, Vĩnh Bảo, Tiên Lãng, Cát Hải, Kiến Thụy thuộc thành phố Hải Phòng</li>
            <li>Các quận, thành phố Thủ Đức và các huyện Củ Chi, Hóc Môn, Bình Chánh, Nhà Bè thuộc thành phố Hồ Chí Minh</li>
            <li>Các thành phố Biên Hòa, Long Khánh và các huyện Nhơn Trạch, Long Thành, Vĩnh Cửu, Trảng Bom, Xuân Lộc thuộc tỉnh Đồng Nai</li>
            <li>Các thành phố Thủ Dầu Một, Thuận An, Dĩ An; các thị xã Bến Cát, Tân Uyên và các huyện Bàu Bàng, Bắc Tân Uyên, Dầu Tiếng, Phú Giáo thuộc tỉnh Bình Dương</li>
            <li>Thành phố Vũng Tàu, thị xã Phú Mỹ thuộc tỉnh Bà Rịa - Vũng Tàu</li>
          </ul>
        </div>
        <div className="region-info">
          <h3>Vùng 2</h3>
          <p>Bao gồm:</p>
          <ul>
            <li>Các huyện còn lại thuộc thành phố Hà Nội và Hải Phòng</li>
            <li>Thành phố Hải Dương thuộc tỉnh Hải Dương</li>
            <li>Thành phố Hưng Yên, thị xã Mỹ Hào và các huyện Văn Lâm, Văn Giang, Yên Mỹ thuộc tỉnh Hưng Yên</li>
            <li>Các thành phố Vĩnh Yên, Phúc Yên và các huyện Bình Xuyên, Yên Lạc thuộc tỉnh Vĩnh Phúc</li>
            <li>Các thành phố Bắc Ninh, Từ Sơn và các huyện Quế Võ, Tiên Du, Yên Phong, Thuận Thành, Gia Bình, Lương Tài thuộc tỉnh Bắc Ninh</li>
            <li>Các thành phố và thị xã thuộc các tỉnh: Quảng Ninh, Thái Nguyên, Hòa Bình, Phú Thọ, Lào Cai, Nam Định, Ninh Bình, Nghệ An, Quảng Bình, Thừa Thiên Huế, Quảng Nam, Khánh Hòa, Lâm Đồng, Bình Thuận</li>
            <li>Các quận, huyện thuộc thành phố Đà Nẵng</li>
            <li>Huyện Cần Giờ thuộc thành phố Hồ Chí Minh</li>
            <li>Một số thành phố, thị xã và huyện thuộc các tỉnh: Tây Ninh, Đồng Nai, Bình Phước, Bà Rịa - Vũng Tàu, Long An, Tiền Giang, Bến Tre, Vĩnh Long, Cần Thơ, Kiên Giang, An Giang, Trà Vinh, Bạc Liêu, Cà Mau</li>
          </ul>
        </div>
        <div className="region-info">
          <h3>Vùng 3</h3>
          <p>Bao gồm:</p>
          <ul>
            <li>Các thành phố trực thuộc tỉnh còn lại (trừ các thành phố trực thuộc tỉnh nêu tại vùng I, vùng II)</li>
            <li>Một số thị xã và huyện thuộc các tỉnh: Hải Dương, Vĩnh Phúc, Phú Thọ, Bắc Giang, Quảng Ninh, Lào Cai, Hưng Yên, Thái Nguyên, Nam Định, Hà Nam, Ninh Bình, Thanh Hóa, Nghệ An, Hà Tĩnh, Thừa Thiên Huế, Quảng Nam, Quảng Ngãi, Phú Yên, Ninh Thuận, Khánh Hòa, Kon Tum, Lâm Đồng, Bình Thuận, Bình Phước, Tây Ninh, Đồng Nai, Bà Rịa - Vũng Tàu, Long An, Tiền Giang, Bến Tre, Vĩnh Long, Cần Thơ, Kiên Giang, An Giang, Hậu Giang, Trà Vinh, Bạc Liêu, Sóc Trăng, Cà Mau, Quảng Bình</li>
          </ul>
        </div>
        <div className="region-info">
          <h3>Vùng 4</h3>
          <p>Bao gồm các địa phương còn lại.</p>
        </div>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default RegionInfoModal;