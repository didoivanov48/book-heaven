package com.bookheaven.springbootlibrary.dao;

import com.bookheaven.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
